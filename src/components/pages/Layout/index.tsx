import '../../../styles/globals.css'
import { TChildrenProps } from '@/src/types'

export const RootLayout = ({ children }: TChildrenProps) => {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  )
}
