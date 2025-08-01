/*
 * @Author: liuliangliang 1653924144@qq.com
 * @Date: 2025-05-27 01:47:07
 * @LastEditors: liuliangliang 1653924144@qq.com
 * @LastEditTime: 2025-08-01 13:48:16
 * @FilePath: /nextjs-dashboard/app/ui/acme-logo.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';

export default function AcmeLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      <GlobeAltIcon className="h-12 w-12 rotate-[15deg]" />
      <p className="text-[44px]">Acme</p>
    </div>
  );
}
