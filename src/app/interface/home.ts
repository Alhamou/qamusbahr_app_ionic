export interface De {
    lang_word: string;
    arabic_word: string;
    article: string;
    lang_description: string;
}

export interface AutoComp {
    words: [];
}
export interface Nom {
    plural: string;
    singular: string;
}
export interface Find {
    find: [string];
}
export interface Find {
    find: [string];
}

export interface Adj {
    adj: [string];
}
//////////////// VERBEN ///////////////
export interface Indicative {
    Present:    [{pron: string, verb: string}];
    Perfect:    [{pron: string, verb: string}];
    Past:       [{pron: string, verb: string}];
    Pluperfect: [{pron: string, verb: string}];
    Future_I:   [{pron: string, verb: string}];
    Future_II:  [{pron: string, verb: string}];
}

// tslint:disable-next-line:class-name
export interface Conjunctive_I_and_II {
    Present:    [{pron: string, verb: string}];
    Perfect:    [{pron: string, verb: string}];
    Past:       [{pron: string, verb: string}];
    Pluperfect: [{pron: string, verb: string}];
}

export interface Conditional {
    Present:    [{pron: string, verb: string}];
    Perfect:    [{pron: string, verb: string}];
    Past:       [{pron: string, verb: string}];
    Pluperfect: [{pron: string, verb: string}];
}

export interface Imperative {
    Worte:    [{pron: string, verb: string}];
}

////////////////// Examples ////////////////

// tslint:disable-next-line:class-name
export interface Example_DE {
    examples:    [{de: string, ar: string}];
}

////////////////// Similarwords ////////////////

// tslint:disable-next-line:class-name
export interface Similarwords {
    result: [{verben: [string], wordsLikes: [string] }];
}










