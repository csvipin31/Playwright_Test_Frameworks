const { devices } = require('@playwright/test');

function getBrowserConfig(browserType, isMobile = false) {
    // Default desktop configurations
    let config = {};

    switch (browserType) {
        case 'chromium':
            config = { ...devices['Desktop Chrome'], browserName: 'chromium' };
            break;
        case 'firefox':
            config = { ...devices['Desktop Firefox'], browserName: 'firefox' };
            break;
        case 'webkit':
            config = { ...devices['Desktop Safari'], browserName: 'webkit' };
            break;
        default:
            console.warn(`Unsupported browser type: ${browserType}, defaulting to Chromium`);
            config = { ...devices['Desktop Chrome'], browserName: 'chromium' };
    }

    // If mobile emulation is requested, adjust the configuration accordingly
    if (isMobile) {
        switch (browserType) {
            case 'chromium':
            case 'firefox': // Assuming you want to use Chromium for Android emulation
                config = { ...devices['Pixel 7'] };
                break;
            case 'webkit': // Assuming WebKit for iPhone emulation
                config = { ...devices['iPhone 15'] };
                break;
            default:
                console.warn(`Unsupported mobile browser type: ${browserType}, defaulting to Pixel 5`);
                config = { ...devices['Pixel 5'] };
        }
    }

    return config;
}

function selectProjects(browserType, isMobile) {
    const projectConfig = getBrowserConfig(browserType, isMobile);
    const projectName = `${browserType} (${isMobile ? 'mobile' : 'desktop'})`;

    return [{
        name: projectName,
        use: projectConfig,
    }];
}

module.exports = { selectProjects };
