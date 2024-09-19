// react component takes in bookarmketlet and outputs html

import React, { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {BookmarkletButton} from "@/components/bookmarkletButton";
import {Card} from "@/components/ui/card";
import {ArrowRight, BookmarkIcon, ChevronLeft, ChevronRight, Menu, RefreshCcw, Star} from "lucide-react";
import {Input} from "@/components/ui/input";



const GenericMarketingSite = ({ theme, accent }) => (
    <div className={`space-y-6 ${theme} p-4 rounded-lg`}>
        <header className="flex justify-between items-center">
            <div className="font-bold text-xl">Acme Innovations</div>
            <nav className="space-x-4">
                <a href="#" className="text-sm hover:underline">Products</a>
                <a href="#" className="text-sm hover:underline">About</a>
                <a href="#" className="text-sm hover:underline">Contact</a>
            </nav>
        </header>
        <main className="space-y-6">
            <section className={`${accent} text-white p-6 rounded-lg`}>
                <h1 className="text-3xl font-bold mb-4">Revolutionize Your Life with Our Groundbreaking Solutions!</h1>
                <p className="mb-4">Are you tired of being productive? Sick of getting things done efficiently? Look no further! Our cutting-edge products are guaranteed to complicate your life in ways you never imagined possible.</p>
                <Button variant="secondary">Embrace Chaos Now <ArrowRight className="ml-2 h-4 w-4" /></Button>
            </section>
            <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-lg shadow">
                    <h2 className="font-semibold mb-2">Procrastination Pro</h2>
                    <p className="text-sm">Why do today what you can put off until tomorrow? Our AI-powered excuse generator has got you covered!</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                    <h2 className="font-semibold mb-2">Confusion Enhancer</h2>
                    <p className="text-sm">Clarity is overrated. Let our patented algorithm turn your simple ideas into incomprehensible jargon!</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                    <h2 className="font-semibold mb-2">Meetings Maximizer</h2>
                    <p className="text-sm">Because there's no such thing as too many meetings. Now with integrated coffee spillage predictions!</p>
                </div>
            </section>
        </main>
        <footer className="text-center text-sm text-gray-500">
            © 2023 Acme Innovations. All wrongs reserved. No refunds, no returns, no regrets (maybe).
        </footer>
    </div>
)


export const BookmarkletRow = ({bookmarklet, index}) => {

    const [bookmarkletCode, setBookmarkletCode] = useState('')
    const [bookmarkletDemo, setBookmarkletDemo] = useState('')

    const createDemo = (meme) => {
        // parse the javascript string to get the variable that is set in it multiple lines case insensitive
        const matches = meme.replace('const memeSpec = ', '')
        const memeSpec = JSON.parse(matches);

        const memeCanvas = document.createElement('div');

        memeSpec.elements.forEach(element => {
            const el = document.createElement(element.element);
            const attributes = element.attributes;
            Object.keys(attributes).forEach(key => {
                if (key === 'style') {
                    attributes[key].position = 'absolute';
                    Object.assign(el.style, attributes[key]);
                } else {
                    el[key] = attributes[key];
                }
            });
            if(element.element === 'img') {
                el.onerror = function() {
                    alert('Failed to load the image. It might be blocked due to CORS policy.');
                    el.remove();
                };
            }
            if (element.parent) {
                const parent = memeCanvas.querySelector(`#${element.parent}`);
                parent.appendChild(el);
            } else {
                memeCanvas.appendChild(el);
            }
        });

        setBookmarkletDemo(memeCanvas.innerHTML);
    }

    useEffect(() => {
        const loadBookmarklet = async () => {
            try {
                const utilityResponse = await fetch('/Meme-Bookmarklets/src/lib/utility.js')
                const utilityContent = await utilityResponse.text()
                const sourceResponse = await fetch(`/Meme-Bookmarklets/src/bookmarklets/${bookmarklet.src}.js`)
                const sourceContent = await sourceResponse.text()
                const combinedContent = `${sourceContent}\n${utilityContent}`

                createDemo(sourceContent)

                setBookmarkletCode(combinedContent)
            } catch (error) {
                console.error('Error loading bookmarklet:', error)
            }
        }

        loadBookmarklet()
    }, [bookmarklet])


    return (
        <div key={index} className="flex flex-col lg:flex-row gap-6">
            <div className="w-full lg:w-1/3 space-y-4">
                <h2 className="text-xl font-semibold">{bookmarklet.name} Bookmarklet</h2>
                <p className="text-sm text-gray-600">{bookmarklet.explanation}</p>
                <Tabs defaultValue="install" className="w-full">
                    <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="install">Install</TabsTrigger>
                        <TabsTrigger value="code">View Code</TabsTrigger>
                    </TabsList>
                    <TabsContent value="install" className="space-y-2">
                        <p className="text-sm font-medium">To install:</p>
                        <BookmarkletButton name={bookmarklet.name} src={bookmarkletCode}/>
                        <p className="text-sm text-gray-600">
                            Drag this button to your bookmarks bar. If you can't see the bookmarks bar, use the keyboard
                            shortcut:
                            <br/>
                            • Windows/Linux: Ctrl + Shift + B
                            <br/>
                            • Mac: Command + Shift + B
                        </p>
                    </TabsContent>
                    <TabsContent value="code">
                        <div className="bg-gray-200 p-4 rounded-md">
                            <h3 className="text-sm font-semibold mb-2">Bookmarklet Code:</h3>
                            <pre className="text-xs overflow-x-auto">
                      <code>{bookmarkletCode}</code>
                    </pre>
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
            <Card className="w-full lg:w-2/3 overflow-hidden shadow-lg">
                <div className="bg-gray-200 p-2 flex items-center gap-2">
                    <Menu className="text-gray-500" size={16}/>
                    <Tabs defaultValue="tab1" className="w-full">
                        <TabsList>
                            <TabsTrigger value="tab1" className="text-xs">Example Website</TabsTrigger>
                        </TabsList>
                    </Tabs>
                </div>
                <div className="bg-gray-100 p-2 flex items-center gap-2">
                    <Button variant="ghost" size="icon" className="h-6 w-6"><ChevronLeft size={14}/></Button>
                    <Button variant="ghost" size="icon" className="h-6 w-6"><ChevronRight size={14}/></Button>
                    <Button variant="ghost" size="icon" className="h-6 w-6"><RefreshCcw size={14}/></Button>
                    <Input className="h-6 text-xs" defaultValue="https://acme-innovations.com"/>
                    <Button variant="ghost" size="icon" className="h-6 w-6"><Star size={14}/></Button>
                </div>
                <div className="bg-gray-50 p-1 flex items-center gap-2 border-b border-gray-200">
                    <BookmarkIcon size={14} className="text-gray-400 ml-2"/>
                    <Button
                        variant="ghost"
                        className="h-6 px-2 text-xs font-normal text-blue-600 hover:text-blue-800 hover:bg-blue-50"
                    >
                        Example Bookmark
                    </Button>
                    <Button
                        variant="ghost"
                        className="h-6 px-2 text-xs font-normal text-blue-600 hover:text-blue-800 hover:bg-blue-50"
                    >
                        {bookmarklet.name}
                    </Button>
                </div>
                <div className="browser-pane bg-white p-4 relative">
                    <div dangerouslySetInnerHTML={{__html: bookmarkletDemo}} className="absolute top-0 left-0 right-0 bottom-0"/>
                    <div className="mb-4">
                        <GenericMarketingSite theme={bookmarklet.siteTheme} accent={bookmarklet.siteAccent}/>
                    </div>
                    <div className="bg-yellow-100 p-4 rounded-md border border-yellow-200">
                        <h3 className="text-sm font-semibold mb-2">Bookmarklet Effect:</h3>
                        <p className="text-sm">{bookmarklet.effect}</p>
                    </div>
                </div>
            </Card>
        </div>
    )
}