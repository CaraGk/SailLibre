import * as Platform from 'tns-core-modules/platform';

const state = {
  locale: Platform.device.language.split("-")[0],
};

const mutations = {
    update() {
        let lang;
        if (Platform.isAndroid) {
            lang = java.util.Locale.getDefault().getLanguage();
        } else if (Platform.isIOS) {
            lang = NSLocale.preferredLanguages.firstObject;
        } else {
            lang = Platform.device.language;
        }
        this.state.locale = lang.split("-")[0];
    },
};

export default {
  state,
  mutations,
};
