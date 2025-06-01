import { SVGProps } from "react"


export function AboutIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>{/* Icon from Material Symbols Light by Google - https://github.com/google/material-design-icons/blob/master/LICENSE */}<path fill="currentColor" d="M9.423 19H5.615q-.69 0-1.153-.462T4 17.384V4.616q0-.691.463-1.153T5.616 3h12.769q.69 0 1.153.463T20 4.616v12.769q0 .69-.462 1.153T18.384 19h-3.807l-2.012 2.011q-.13.131-.267.184t-.298.053t-.298-.053t-.268-.184zM5 17.235q1.35-1.325 3.138-2.088T12 14.384t3.863.763T19 17.235V4.615q0-.23-.192-.423T18.384 4H5.616q-.231 0-.424.192T5 4.615zm7-5.158q1.258 0 2.129-.871T15 9.077t-.871-2.129T12 6.077t-2.129.871T9 9.077t.871 2.129t2.129.871M5.885 18h12.23v-.173q-1.319-1.24-2.873-1.841T12 15.385q-1.65 0-3.213.591t-2.903 1.813zM12 11.077q-.817 0-1.409-.591Q10 9.894 10 9.077t.591-1.409q.592-.591 1.409-.591t1.409.591Q14 8.26 14 9.077t-.591 1.409t-1.409.591m0-.46"></path></svg>
  )
}

export default AboutIcon;