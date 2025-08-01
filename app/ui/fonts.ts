/*
 * @Author: liuliangliang 1653924144@qq.com
 * @Date: 2025-08-01 13:39:59
 * @LastEditors: liuliangliang 1653924144@qq.com
 * @LastEditTime: 2025-08-01 14:23:38
 * @FilePath: /nextjs-dashboard/app/ui/fonts.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Inter, Lusitana } from "next/font/google";
import localFont from "next/font/local";
import './styles/fonts.css'; // 确保路径正确

export const inter = Inter({ subsets: ["latin"] });

export const lusitana = Lusitana({ subsets: ["latin"], weight: "400" });

// const roboto = localFont({
//   src: [
//     {
//       path: "/fonts/D-DIN-PRO-600-Bold.otf",
//       weight: "600",
//       style: "normal",
//     },
//     {
//       path: "/fonts/D-DIN-PRO-800-ExtraBold.otf",
//       weight: "800",
//       style: "italic",
//     },
//   ],
// });
