import React from 'react'
import {Button} from "@/components/ui/button"
import {Card} from "@/components/ui/card"
import {Input} from "@/components/ui/input"
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs"
import {ArrowRight, BookmarkIcon, ChevronLeft, ChevronRight, Menu, RefreshCcw, Star} from 'lucide-react'
import {BookmarkletButton} from "@/components/bookmarkletButton.jsx";
import {BookmarkletRow} from "@/components/bookmarkletRow.jsx";

const bookmarklets = [
    {
        name: "Soyjak",
        buttonLabel: "Ö `Ö Soyjak",
        src: "soyjak",
        description: "Reacts to webpage content with exaggerated excitement.",
        effect: "Adds Soyjak reactions to selected elements.",
        explanation: "Found something online that's way overhyped? This bookmarklet lets you express your ironic excitement with Soyjak reactions, perfect for poking fun at exaggerated enthusiasm on the internet.",
        siteTheme: "bg-yellow-50",
        siteAccent: "bg-yellow-500"
    },
    {
        name: "Wait, It's All...?",
        buttonLabel: "🌎👨‍🚀🔫👨‍🚀 Wait, It's All...?",
        src: "waitIsItAll",
        description: "Reveals surprising truths about webpage content.",
        effect: "Transforms the page into an 'Always Has Been' meme format.",
        explanation: "Had a sudden realization while browsing? This bookmarklet turns the entire webpage into an 'Wait, it's all...? Always has been.' meme, perfect for those mind-blowing internet moments.",
        siteTheme: "bg-indigo-50",
        siteAccent: "bg-indigo-500"
    },
    {
        name: "Disappointed Fan",
        buttonLabel: "😞Disappointed Fan",
        src: "disapointedFan",
        description: "Expresses utter disappointment with the current webpage.",
        effect: "Overlays a disappointed fan reaction on the page.",
        explanation: "This bookmarklet adds a touch of sports-fan disappointment to any webpage. Perfect for when a site fails to meet your expectations or when you encounter yet another 404 error.",
        siteTheme: "bg-red-50",
        siteAccent: "bg-red-500"
    },
    {
        name: "Drake No",
        buttonLabel: "🚫 Drake No",
        src: "drakeNo",
        description: "Dismisses the current page content and suggests a better alternative.",
        effect: "Adds Drake reaction memes to elements on the page.",
        explanation: "Use this bookmarklet to express your disapproval of the current page content while suggesting a hilarious alternative. It's like having Drake as your personal web content critic.",
        siteTheme: "bg-yellow-50",
        siteAccent: "bg-yellow-500"
    },
    {
        name: "Drake Yes",
        buttonLabel: "✅ Drake Yes",
        src: "drakeYes",
        description: "Approves of the current page content enthusiastically.",
        effect: "Adds approving Drake reaction memes to elements on the page.",
        explanation: "Use this bookmarklet to express your approval of the current page content. It's like having Drake give a thumbs up to your favorite web content.",
        siteTheme: "bg-green-50",
        siteAccent: "bg-green-500"
    },
    {
        name: "Fry Stare",
        buttonLabel: "-_- Fry Stare",
        src: "fryStare",
        description: "Adds a suspicious Fry stare to questionable content.",
        effect: "Overlays Fry's squinting face on selected elements.",
        explanation: "When you encounter dubious information online, let Fry's skeptical squint do the talking. This bookmarklet adds a layer of humorous suspicion to any webpage.",
        siteTheme: "bg-orange-50",
        siteAccent: "bg-orange-500"
    },
    {
        name: "In The Way",
        buttonLabel: "📸 In The Way",
        src: "inTheWay",
        description: "Adds a photobombing tourist to your webpage.",
        effect: "Inserts the 'In The Way Guy' meme into images on the page.",
        explanation: "Ever felt like your web browsing needed more unexpected photobombs? This bookmarklet adds the famous 'In The Way Guy' to images on the page, bringing a touch of tourist charm to any site.",
        siteTheme: "bg-green-50",
        siteAccent: "bg-green-500"
    },
    {
        name: "Roll Safe",
        buttonLabel: "👉🧠💡 Roll Safe",
        src: "rollSafe",
        description: "Adds witty, yet questionable advice to any webpage.",
        effect: "Inserts 'Roll Safe' meme captions to selected text.",
        explanation: "Transform any text on a webpage into a piece of Roll Safe wisdom. Perfect for when you need a dose of clever-but-not-really life hacks while browsing.",
        siteTheme: "bg-blue-50",
        siteAccent: "bg-blue-500"
    },
    {
        name: "Success Kid",
        buttonLabel: "💪 Success Kid",
        src: "successKid",
        description: "Celebrates small victories on any webpage.",
        effect: "Adds 'Success Kid' reactions to positive content.",
        explanation: "Found something mildly impressive online? Let the 'Success Kid' express your triumph! This bookmarklet adds a fist-pumping toddler to celebrate life's little wins on any webpage.",
        siteTheme: "bg-green-50",
        siteAccent: "bg-green-500"
    },
    {
        name: "Confused Travolta",
        buttonLabel: "🕴️ Confused Travolta",
        src: "travolta",
        description: "Expresses confusion about the webpage's content.",
        effect: "Inserts a confused John Travolta gif into the page.",
        explanation: "When a webpage leaves you utterly baffled, let John Travolta express your confusion. This bookmarklet adds the famous 'Confused Travolta' gif to perfectly capture your bewilderment.",
        siteTheme: "bg-purple-50",
        siteAccent: "bg-purple-500"
    },
    // {
    //     name: "Women Yelling at Cat",
    //     buttonLabel: "Women Yelling at Cat",
    //     src: "womenYellingCat",
    //     description: "Turns any argument on a webpage into a hilarious meme.",
    //     effect: "Transforms text into a 'Women Yelling at Cat' meme format.",
    //     explanation: "Got two conflicting viewpoints on a page? This bookmarklet turns them into the iconic 'Women Yelling at Cat' meme, adding a touch of internet humor to any online debate.",
    //     siteTheme: "bg-pink-50",
    //     siteAccent: "bg-pink-500"
    // },
    {
        name: "Buzz Lightyear Everywhere",
        buttonLabel: "🤠👨‍🚀🌎Buzz Lightyear Everywhere",
        src: "everywhere",
        description: "Points out recurring elements on a webpage.",
        effect: "Adds 'X, X Everywhere' captions to repeated content.",
        explanation: "Notice something that keeps popping up on a webpage? This bookmarklet lets you channel your inner Buzz Lightyear to point it out, adding 'X, X Everywhere' captions to highlight repetitive content.",
        siteTheme: "bg-blue-50",
        siteAccent: "bg-blue-500"
    },
    {
        name: "Fry Take My Money",
        buttonLabel: "💁💸 Fry Take My Money",
        src: "fryTakeMyMoney",
        description: "Expresses extreme willingness to pay for something on the page.",
        effect: "Overlays Fry's 'Shut up and take my money!' meme on product images.",
        explanation: "Found something online you absolutely must have? Let Fry express your enthusiasm! This bookmarklet adds the 'Shut up and take my money!' meme to product images, perfect for impulse buyers and window shoppers alike.",
        siteTheme: "bg-green-50",
        siteAccent: "bg-green-500"
    },
    {
        name: "Patrick Bateman",
        buttonLabel: "🪓💁🎶‍️Patrick Bateman",
        src: "patrickBateman",
        description: "Adds a touch of American Psycho to any webpage.",
        effect: "Inserts Patrick Bateman reactions to selected content.",
        explanation: "Transform any mundane webpage into a scene from American Psycho. This bookmarklet adds Patrick Bateman reactions to selected content, perfect for when you need to express your inner '80s yuppie psychopath.",
        siteTheme: "bg-gray-50",
        siteAccent: "bg-gray-500"
    },
    {
        name: "Sweating Towel Guy",
        buttonLabel: "😰 Sweating Towel Guy",
        src: "sweating",
        description: "Expresses anxiety or tension about webpage content.",
        effect: "Adds the 'Sweating Towel Guy' meme to stressful content.",
        explanation: "When a webpage makes you nervous or presents a tough decision, let the 'Sweating Towel Guy' express your anxiety. This bookmarklet adds a touch of tension to any online content.",
        siteTheme: "bg-blue-50",
        siteAccent: "bg-blue-500"
    },
    {
        name: "Condescending Wonka",
        buttonLabel: "🍫 Condescending Wonka",
        src: "wonka",
        description: "Adds sarcastic Wonka comments to webpage content.",
        effect: "Inserts condescending Wonka captions to selected text.",
        explanation: "Need to add a touch of sarcasm to a webpage? This bookmarklet lets you channel your inner Condescending Wonka, adding witty, sarcastic comments to any content you select.",
        siteTheme: "bg-purple-50",
        siteAccent: "bg-purple-500"
    }
]

export default function BookmarkletsWithDynamicUrls() {
    return (
        <>
        <section>
            <h2 className="text-2xl font-bold mb-6 ">Bookmarklets Showcase</h2>
            <p>Browse the selection of bookmarklets below and find your favorites. Then, follow the simple steps on the left to add them to your bookmarks bar, so you can use them anytime with just a click!</p>
        </section>
        <div className="container mx-auto p-4 min-h-screen space-y-12 mt-8">
                {bookmarklets.map((bookmarklet, index) => (
                    <BookmarkletRow bookmarklet={bookmarklet} index={index}/>
                ))}
        </div>
        </>
    )
}