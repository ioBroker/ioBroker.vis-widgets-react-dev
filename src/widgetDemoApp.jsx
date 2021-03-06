import React from 'react';
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';

import GenericApp from '@iobroker/adapter-react-v5/GenericApp';
import { i18n as I18n, Loader } from '@iobroker/adapter-react-v5';

class WidgetDemoApp extends GenericApp {
    constructor(props) {
        const extendedProps = { ...props };
        super(props, extendedProps);

        (async () => {
            this.translations = {
                en: require('@iobroker/adapter-react-v5/i18n/en.json'),
                de: require('@iobroker/adapter-react-v5/i18n/de.json'),
                ru: require('@iobroker/adapter-react-v5/i18n/ru.json'),
                pt: require('@iobroker/adapter-react-v5/i18n/pt.json'),
                nl: require('@iobroker/adapter-react-v5/i18n/nl.json'),
                fr: require('@iobroker/adapter-react-v5/i18n/fr.json'),
                it: require('@iobroker/adapter-react-v5/i18n/it.json'),
                es: require('@iobroker/adapter-react-v5/i18n/es.json'),
                pl: require('@iobroker/adapter-react-v5/i18n/pl.json'),
                'zh-cn': require('@iobroker/adapter-react-v5/i18n/zh-cn.json'),
            };

            // init translations
            I18n.setTranslations(this.translations);
        })();

        I18n.setLanguage((navigator.language || navigator.userLanguage || 'en').substring(0, 2).toLowerCase());
    }

    renderWidget() {
        return <div>Please implement renderWidget method in your class</div>;
    }

    render() {
        if (!this.state.loaded) {
            return <StyledEngineProvider injectFirst>
                <ThemeProvider theme={this.state.theme}>
                    <Loader theme={this.state.themeType} />
                </ThemeProvider>
            </StyledEngineProvider>;
        }

        const style = {
            backgroundColor: this.state.themeType === 'dark' ? '#303030' : '#f0f0f0',
            color: this.state.themeType === 'dark' ? '#f0f0f0' : '#303030',
            height: '100%',
            width: '100%',
            overflow: 'auto',
        };

        return <StyledEngineProvider injectFirst>
            <ThemeProvider theme={this.state.theme}>
                <div style={style}>
                    {this.renderWidget()}
                </div>
            </ThemeProvider>
        </StyledEngineProvider>;
    }
}

export default WidgetDemoApp;
