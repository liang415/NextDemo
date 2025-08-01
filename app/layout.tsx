/*
 * @Author: liuliangliang 1653924144@qq.com
 * @Date: 2025-05-27 01:47:07
 * @LastEditors: liuliangliang 1653924144@qq.com
 * @LastEditTime: 2025-08-01 13:43:17
 * @FilePath: /nextjs-dashboard/app/layout.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
