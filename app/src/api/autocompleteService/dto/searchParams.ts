export interface SearchParams {
    search: string;
    center?: string;
    format?: 'JSON' | 'TRIAS' | 'TRIAS12';
    pointType?: string; // 'P,S,W,V,N'
    profile?: string;
    withAddress?: boolean;
}
