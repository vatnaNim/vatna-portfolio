import { SVGProps } from 'react';

export function ColorIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>{/* Icon from Iconoir by Luca Burgio - https://github.com/iconoir-icons/iconoir/blob/main/LICENSE */}<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"><path d="m2.636 10.293l7.071-7.071l8.485 8.485l-7.07 7.071a2 2 0 0 1-2.83 0l-5.656-5.657a2 2 0 0 1 0-2.828m5.657-8.485l1.414 1.414"></path><path strokeMiterlimit="1.5" d="M20 15s3 2.993 3 4.887c0 1.655-1.345 3-3 3s-2.988-1.345-3-3C17.01 17.992 20 15 20 15" clipRule="evenodd"></path></g></svg>
  )
}

export default ColorIcon;