// the Fortune list 
const fortunes = {
    1: [
        "You will have a great day!",
        "Today is full of possibilities.",
        "Happiness is knocking on your door."
    ],
    2: [
        "Something unexpected will come your way.",
        "Be ready for a pleasant surprise.",
        "Opportunity comes in disguise today."
    ],
    3: ["A thrilling time is in your near future."],
    4: ["You will soon embark on a new adventure."],
    5: [
        "An old friend will reappear in your life.",
        "Reconnecting brings joy today."
    ],
    6: ["Financial prosperity is headed your way."],
    7: [
        "A pleasant surprise is waiting for you.",
        "Expect good news in the afternoon."
    ],
    8: [
        "You will discover a hidden talent.",
        "Your creativity will shine today."
    ],
    9: ["Your kindness will lead to new friendships."],
    10: [
        "An answer you seek is closer than you think.",
        "Keep asking questions—clarity will come."
    ],
    11: ["Trust your instincts—they won’t steer you wrong."],
    12: [
        "Good news will come from afar.",
        "A message will bring a smile today."
    ],
    13: ["Someone admires you secretly."],
    14: [
        "You’ll find what you've been looking for.",
        "Your search ends with satisfaction."
    ],
    15: ["Take a risk; it will pay off."],
    16: ["You will gain the respect of others."],
    17: ["A fresh start will improve your life."],
    18: [
        "Your efforts will soon be rewarded.",
        "Hard work pays off—keep going."
    ],
    19: ["A positive change is on the horizon."],
    20: [
        "New experiences will broaden your perspective.",
        "Try something new today."
    ],
    21: ["Happiness begins with you."],
    22: [
        "You will overcome a current obstacle.",
        "Strength is found in persistence."
    ],
    23: ["A long-awaited opportunity will arise."],
    24: ["Love is closer than you think."],
    25: ["Success is a journey, not a destination."],
    26: [
        "A difficult choice will lead to growth.",
        "Don't fear big decisions—they shape you."
    ],
    27: ["You are stronger than you realize."],
    28: [
        "Someone from your past has good intentions.",
        "Revisiting old memories brings clarity."
    ],
    29: ["Your ideas will bring you recognition."],
    30: ["Now is the time to try something bold."],
    31: [
        "Good fortune is smiling upon you.",
        "The universe favors your next step."
    ],
    32: ["You are on the path to greatness."],
    33: ["Embrace change with confidence."],
    34: [
        "You’ll soon solve a persistent problem.",
        "Solutions are closer than they appear."
    ],
    35: ["A moment of reflection brings clarity."],
    36: ["Your patience will be rewarded."],
    37: [
        "An unexpected gift will brighten your day.",
        "Gratitude turns small things into blessings."
    ],
    38: ["Look for joy in small things."],
    39: ["You will meet someone who changes your life."],
    40: ["A dream you have will come true."],
    41: ["Let go of fear—it holds you back."],
    42: [
        "You will inspire someone today.",
        "Your light encourages others to shine."
    ],
    43: ["Great things never came from comfort zones."],
    44: ["You’ll soon discover a powerful truth."],
    45: ["Keep an open heart and mind."],
    46: ["A small act of kindness will ripple far."],
    47: ["Travel is in your future."],
    48: ["Don’t underestimate your own abilities."],
    49: [
        "Luck is what happens when preparation meets opportunity.",
        "Stay prepared—good things are ahead."
    ],
    50: ["Be true to yourself—others will follow."],
    51: ["Unexpected joy is on the way."],
    52: ["You’ll soon be faced with a big decision."],
    53: ["Take time to relax and recharge."],
    54: ["Your path will soon be illuminated."],
    55: ["Celebrate your progress, not perfection."],
    56: ["Your intuition is your best guide."],
    57: [
        "You will make a valuable connection.",
        "A new ally is approaching."
    ],
    58: ["The next step will become clear soon."],
    59: ["Don’t fear failure—it leads to success."],
    60: ["You will find clarity in confusion."],
    61: ["Your actions will speak louder than words."],
    62: ["Trust the process—it’s working."],
    63: ["A meaningful conversation is coming."],
    64: ["Something beautiful is about to unfold."],
    65: ["You will rise above today’s challenges."],
    66: ["Be mindful of your words today."],
    67: [
        "A new friendship is forming.",
        "An unexpected bond will bring joy."
    ],
    68: ["Take time to appreciate how far you’ve come."],
    69: ["You will be presented with a rare chance."],
    70: ["Keep your eyes open for signs."],
    71: ["Your presence brings peace to others."],
    72: ["Make space for something new."],
    73: ["You are being guided, even if you can’t see it."],
    74: ["Everything happens for a reason—trust it."],
    75: ["Someone close to you has great news."],
    76: [
        "You will soon be celebrated.",
        "Recognition comes when least expected."
    ],
    77: ["There is strength in vulnerability."],
    78: ["Balance will return to your life."],
    79: ["Your story is just beginning."],
    80: ["You are capable of incredible things."],
    81: ["You’ll laugh unexpectedly today."],
    82: ["Your hard work is about to pay off."],
    83: ["An opportunity disguised as a problem will appear."],
    84: [
        "You are exactly where you need to be.",
        "Your journey is unfolding perfectly."
    ],
    85: ["Let yourself dream a little bigger."],
    86: ["Your curiosity will open new doors."],
    87: ["Speak your truth with kindness."],
    88: ["Help will come when you least expect it."],
    89: ["You will feel a deep sense of peace soon."],
    90: ["Everything will fall into place."],
    91: ["You will be given the tools you need."],
    92: ["Be ready to embrace a turning point."],
    93: ["Something you've lost will return."],
    94: ["Your courage will lead others."],
    95: ["The coming week holds exciting news."],
    96: [
        "You are surrounded by unseen support.",
        "Your guides are watching over you."
    ],
    97: ["Forgiveness will bring peace today."],
    98: ["Speak less, observe more."],
    99: ["The universe is working in your favor."],
    100: [
        "Endings lead to new beginnings.",
        "Let go to grow."
    ]
};

export function fortuneTeller(input) {

    const trimmed = input.trim();

    // Check if the input is a number
    if (!isNaN(trimmed) && trimmed !== '') {
        const number = parseInt(trimmed);
        const message = fortunes[number];
        
        if(Array.isArray(message)){
            const randomIndex = Math.floor(Math.random()* message.length);
            const randomMessage = message[randomIndex];
            return `Your Fortune is : ${randomMessage}`
        }else{
            return `No fortune found for this Number: ${number}`
        }
    } else {
        // If the input is not a number, return the usual fortune message
        return `Your fortune is: ${trimmed}`;
    }
}
