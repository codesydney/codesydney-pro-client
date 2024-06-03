export type Tags = 'EXP' | 'FINAL' | 'PROTO'

export interface Experimental {
  id?: string
  tag: Tags
  completed: boolean
  label: string
}

export interface ExperimentsApiResponse {
  data: Experimental[]
}

export interface ExperimentalApiResponse {
  data: Experimental
}
