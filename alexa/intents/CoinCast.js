const lib = require('lib');
var Hex = [];
var HexNum = 18;
Hex[1] = "The Creative, The Creative works sublime success, through perseverance. Push hard. Seek light.";
Hex[2] = "The Receptive, The Receptive works sublime success, through following. Nurture. Welcome the shadows.";
Hex[3] = "Difficulty at the Beginning, Chaos and clouds. Put things in order. Seek aid. Don&apos;t set out.";
Hex[4] = "Youthful Folly, Be open. Be still. Show respect. Be sincere. Innocence shall overcome darkness.";
Hex[5] = "Waiting, Cross the great water: it&apos;s time to act. Be confident, be cautious. Plan, then strike.";
Hex[6] = "Conflict, Pause. Don&apos;t halt, but pause. Seek your obstruction, face it, negotiate. Seek harmony.";
Hex[7] = "The Army, The soldier&apos;s task is not to make war, but to keep children safe. Agression brings remorse.";
Hex[8] = "Holding Together, Remain a part of the whole, one with the flow of the work of the gathering.";
Hex[9] = "The Taming Power of the Small, Attend to small details. Launch no ships, take no great actions.";
Hex[10] = "Treading, Carefully act. Do not tread on the tail of the tiger. Danger and opportunity.";
Hex[11] = "Peace, All conflict fades: the small departs, the great arrives. Prosperity and ease prevail.";
Hex[12] = "Standstill, Obstruction. Turmoil. Protect your inner light, and withdraw. No blame.";
Hex[13] = "Fellowship with Men, Like-minded people gather. The fire blazes. Community and camaraderie arise.";
Hex[14] = "Possession in Great Measure, Prosperity and abundance. The sun at noon casts her wealth equally.";
Hex[15] = "Modesty, Humility brings success. The mountain erodes to fill the valley.";
Hex[16] = "Enthusiasm, Thunder breaks. Summon the invisible music, dance with the constellations.";
Hex[17] = "Following, Seek the thunder to find joy. The waves upon the lake know only follow, follow, follow.";
Hex[18] = "Work On What Has Been Spoiled, Drought, famine, poison. Muster your strength to meet this time.";
Hex[19] = "Approach, A true teacher is boundlessly nurturing the great and small. All prosper in their light.";
Hex[20] = "Contemplation, A sacred moment. Ambition stands proud in the high tower. Who can not see it?";
Hex[21] = "Biting Through, An obstruction is near, like a branch between one&apos;s teeth. Bite through.";
Hex[22] = "Grace, Adornment should reflect the heart. Small efforts bring profit. Fire illuminates the peak.";
Hex[23] = "Splitting Apart, Peril. Do not act. Be the patient mountain. Let the bad moon wane.";
Hex[24] = "Return, A time of stagnation is ending, and the horses of change awaken to find the stall is open.";
Hex[25] = "Innocence, Be true to your nature, be true to your destiny. All things favor the selfless.";
Hex[26] = "The Taming Power of the Great, Power should never walk without justice at its guide.";
Hex[27] = "The corners of the mouth, We nourish that which nourishes us. Cultivate harmony.";
Hex[28] = "Preponderance of the Great, The roof-beam sags. A time out of kilter. Avoid danger. Adapt.";
Hex[29] = "The Abysmal, The rapids approach. Hold fast to your paddle, and be confident in its strength.";
Hex[30] = "The Clinging, All things luminous cling to something which keeps them from burning out.";
Hex[31] = "Influence, The sage wins hearts with wisdom, the king with justice, youth with persistence.";
Hex[32] = "Duration, Endurance is not corrupted by wealth, broken by poverty, nor crushed by authority.";
Hex[33] = "Retreat, The dark and the small are on the rise. The path to victory, in this moment, is retreat.";
Hex[34] = "The Power of the Great, Power should never act without justice as its restraint.";
Hex[35] = "Progress, Center until you find flow. Flow until you find light. Shine until you find the center.";
Hex[36] = "Darkening of the Light, When black is the uniform color, the cautious hide their light.";
Hex[37] = "The Family, Family is the brick of which society is built. Harmony is the clay.";
Hex[38] = "Opposition, Resolve small frictions. Let the larger conflicts burn. Use may be made of their ashes.";
Hex[39] = "Obstruction, Your way is blocked. Time to pause, to keep still, to withdraw. Seek allies.";
Hex[40] = "Deliverance, Let rain and thunder wash away mistakes and transgressions. Your time has arrived.";
Hex[41] = "Decrease, Inner strength and a true heart are the wealth of an empty pocket.";
Hex[42] = "Increase, Something on high nourishes that which is below. Great abundance results.";
Hex[43] = "Breakthrough, The best way to fight the old is to create the new. Wealth beckons with bony fingers.";
Hex[44] = "Coming to Meet, Beware the desire to dominate when it wears the mask of seduction.";
Hex[45] = "Gathering Together, Look inward. Find your ancestors, your nature. There will come a summoning.";
Hex[46] = "Pushing Upward, From an acorn sprouts an energy which does not pause in its advance.";
Hex[47] = "Oppression, Joy even in adversity is the mark of an unbroken spirit. Cling to your ambition.";
Hex[48] = "The Well, The child, the family, the town: all come and go. But the well, the wisest elder, remains. ";
Hex[49] = "Revolution, Fire in the lake: the image of change. One force extinguishes another.";
Hex[50] = "The Caldron, Wood and fire. Great fortune awaits new beginnings, a new path, new leadership.";
Hex[51] = "The Arousing, Laughter in the face of terror. Fear wears a gorilla suit. Thunder doesn&apos;t strike.";
Hex[52] = "Keeping Still, The wise find joy in water, the good find joy in mountains. Seek harmony.";
Hex[53] = "Development, Talent and relationships grow seedling by seedling, root by root, stalk by stalk.";
Hex[54] = "The Marrying Maiden, Confuse not your formal relationships and those born of desire. Each to each.";
Hex[55] = "Abundance, Brief are the times of plenty. Let no shadow darken this time. Rejoice. Feast. Celebrate.";
Hex[56] = "Wanderer, Strange lands &amp; separation are the wanderer&apos;s lot. The Long distance runner runs on.";
Hex[57] = "The Gentle, Constant gentle influence is invisible. It does not dazzle, nor shout. It endures.";
Hex[58] = "The Joyous, Joy like water. It cannot be contained. It overflows from one heart to another.";
Hex[59] = "Dispersion, Now comes the scattering. Salt mist upon the air. Whitecaps on the water. Reunion.";
Hex[60] = "Limitation, Limitation measures our freedom by necessitating choice. Balance your heart and choose.";
Hex[61] = "Inner Truth, To attain spiritual strength, cross the great water in an empty boat.";
Hex[62] = "Preponderance of the small, Set modest goals. Wings made of wax will not bear you to the sun.";
Hex[63] = "After Completion, Arrival. In this and every ending sleeps a beginning. The future is incomplete.";
Hex[64] = "Before Completion, The fox crossing the ice must take care not to wet his tail in the water.";

var HexNum = Math.floor((Math.random() * 64) + 1);
var HexText = "Today's Hexagram is number "+HexNum+','+Hex[HexNum]; 


module.exports = function (slots, callback) {

  return callback(null, HexText);

};




