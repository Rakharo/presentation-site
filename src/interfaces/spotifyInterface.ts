// ...existing code...
export interface iMusics {
    items: iMusicItem[];
    href?: string;
    limit?: number;
    next?: string | null;
    offset?: number;
    previous?: string | null;
    total?: number;
}

export interface iMusicItem {
    album: iAlbumObject;
    artists: iArtistObject[];
    available_markets?: string[];
    disc_number?: number;
    duration_ms: number;
    explicit?: boolean;
    external_ids?: iExternalIds;
    external_urls: iExternalUrls;
    href: string;
    id: string;
    is_local?: boolean;
    is_playable?: boolean;
    linked_from?: iLinkedFrom | null;
    name: string;
    popularity?: number;
    preview_url?: string | null;
    track_number?: number;
    type?: string;
    uri?: string;
    restrictions?: iRestrictions | null;
}

export interface iAlbumObject {
    album_type: string;
    artists: iArtistObject[];
    available_markets?: string[];
    external_urls: iExternalUrls;
    href: string;
    id: string;
    images?: iImageObject[];
    name: string;
    release_date?: string;
    release_date_precision?: string;
    total_tracks?: number;
    type?: string;
    uri?: string;
}

export interface iArtistObject {
    external_urls: iExternalUrls;
    href: string;
    id: string;
    name: string;
    type?: string;
    uri?: string;
}

export interface iImageObject {
    height?: number | null;
    url: string;
    width?: number | null;
}

export interface iExternalUrls {
    spotify?: string;
    [key: string]: string | undefined;
}

export interface iExternalIds {
    isrc?: string;
    ean?: string;
    upc?: string;
    [key: string]: string | undefined;
}

export interface iLinkedFrom {
    external_urls?: iExternalUrls;
    href?: string;
    id?: string;
    type?: string;
    uri?: string;
}

export interface iRestrictions {
    reason: string;
}