export interface IFolder {
  absolute: string;
  id: number;
  owner: number;
}

export type FolderProps = {
  title: string;
  id: number;
  owner: number;
};
