import { MissingTranslationHandler, MissingTranslationHandlerParams } from 'ng2-translate';

export class MyMissingTranslationHandler implements MissingTranslationHandler {
    handle(params: MissingTranslationHandlerParams){
        return 'Translations not available for ' + params.key;
    }
}