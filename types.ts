export interface TwitterInfo {
    user: string;
    header: string;
    profPic: string;
    displayName: string;
    bio: string;
}

export interface TwitterInfoObject {
    twitter: TwitterInfo;
}

export type WhoviansList = {
    nome: string;
    pronomes: string;
    twitter?: string | string[];
    mastodon?: string;
    instagram?: string | string[];
    bereal?: string;
    skoob?: string;
    aniversario: string;
    profissao?: string;
    cota?: string;
};
