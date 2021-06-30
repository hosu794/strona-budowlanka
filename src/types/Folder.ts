export interface IFolder {
  absolute: string;
  id: number;
  owner: number;
}

export type FolderProps = {
  title: string;
  folderChildren?: any
  id: number | string; 
  attachemntsCount: any; 
};

export interface IFolderParam {
  id: string | undefined;
}
