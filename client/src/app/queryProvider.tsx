import { queryClient } from '../shared/api/queryClient'
import { QueryClientProvider } from 'react-query'
import { ReactNode } from 'react'

export function QueryProvider({ children }: { children?: ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}
