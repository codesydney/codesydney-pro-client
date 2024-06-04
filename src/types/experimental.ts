export type Tags = 'EXP' | 'FINAL' | 'PROTO'

export interface Experimental {
  id?: string
  tag: Tags
  completed: boolean
  label: string
}

export interface ExperimentsApiResponse {
  data: Experimental[] | undefined
}

export interface ExperimentalApiResponse {
  data: Experimental | undefined
}
