import { SVGProps } from "react";

export function HomeIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512" {...props}>{/* Icon from IonIcons by Ben Sperry - https://github.com/ionic-team/ionicons/blob/main/LICENSE */}<path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M80 212v236a16 16 0 0 0 16 16h96V328a24 24 0 0 1 24-24h80a24 24 0 0 1 24 24v136h96a16 16 0 0 0 16-16V212"></path><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M480 256L266.89 52c-5-5.28-16.69-5.34-21.78 0L32 256m368-77V64h-48v69"></path></svg>
    )
}
export default HomeIcon;