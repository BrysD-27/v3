"use client";
import { StyledHeader, StyledHeaderContent } from "@/styles/globalcomponents";
import BackgroundAnimation from "../background-animation";
import Nav from "../nav";

const Header = () => {
    return (
        <>
            <StyledHeader>
                <StyledHeaderContent>
                    <div className="mb-4">
                        <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">Bryson Davis</h1>
                        <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">Full stack Engineer</h2>
                        <p className="mt-4 max-w-xs leading-normal">I craft accessible, scalable, full-stack web solutions.</p>
                        <Nav />
                    </div>
                    <ul className="flex">
                        <li>
                            <a>
                                Github
                            </a>
                        </li>
                        <li>
                            <a>
                                Linkedin
                            </a>
                        </li>
                        <li>
                            <a>
                                Instagram
                            </a>
                        </li>
                    </ul>
                </StyledHeaderContent>
                <BackgroundAnimation />
            </StyledHeader>
            <main>
                Test
            </main>
        </>
    )
}

export default Header;