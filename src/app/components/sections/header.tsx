"use client";
import { StyledHeader } from "@/styles/globalcomponents";
import BackgroundAnimation from "../background-animation";

const Header = () => {
    return (
        <>
            <StyledHeader>
                <div>
                    <div>
                        <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">Bryson Davis</h1>
                        <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">Full stack Engineer</h2>
                        <p className="mt-4 max-w-xs leading-normal">I craft accessible, scalable, full-stack web solutions.</p>
                        <nav>
                            <ul>
                                <li>
                                    <a>About</a>
                                </li>
                                <li>
                                    <a>Experience</a>
                                </li>
                                <li>
                                    <a>Projects</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <ul>
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
                </div>
                <BackgroundAnimation />
            </StyledHeader>
            <main>
                Test
            </main>
        </>
    )
}

export default Header;