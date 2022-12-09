// Description: Create searchable select dropdown and save user choice to generate recommendations
// Based on code from CodingNepal: https://www.codingnepalweb.com/custom-select-menu-html-javascript/ 

// variables
const wrapper = document.querySelector(".wrapper");
const selectBtn = wrapper.querySelector(".select-btn");
const searchInput = wrapper.querySelector("input");
const options = wrapper.querySelector(".book-options");
const spanItem = selectBtn.getElementsByTagName("span");

// array of books
let books = ['10 Blind Dates ', '99 Percent Mine ', 'A Beautiful Wedding ', 'A Bend in the Road ', 'A Breath of Snow and Ashes ', 'A Brush with Love ', 'A Court of Frost and Starlight ',  
             'A Court of Mist and Fury ', 'A Court of Thorns and Roses ', 'A Court of Wings and Ruin ', 'A Curse So Dark and Lonely ', 'A Deal with the Elf King ',
             'A Discovery of Witches ', 'A Duke by Default ', 'A Girl Like Her ', 'A Great and Terrible Beauty ', 'A Hunger Like No Other ', 'A Kingdom of Dreams ',
             'A Kingdom of Flesh and Fire ', 'A Kiss at Midnight ', 'A Kiss for Midwinter ', 'A Knight in Shining Armor ', 'A Lady by Midnight ', 'A Lady for a Duke ', 'A Lot Like Adiós ',
             'A Lot like Love ', 'A Marvellous Light ', "A Midsummer Night's Dream ", 'A Night Like This ', 'A Night to Surrender ', 'A Not So Meet Cute ', 'A Pho Love Story ',
             'A Prince on Paper ', 'A Princess in Theory ', 'A Promise of Fire ', 'A Quick Bite ', 'A Rogue by Any Other Name ', "A Rogue of One's Own ", 'A Room with a View ',
             'A Scot in the Dark ', 'A Thousand Boy Kisses ', 'A Thousand Pieces of You ', 'A Torch Against the Night ', 'A Touch of Darkness ', 'A Very Large Expanse of Sea ',
             'A Walk to Remember ', 'A Wallflower Christmas ', 'A Week to Be Wicked ', 'A Court of Silver Flames ', 'About That Night ', 'Accidentally Engaged ', 'Acheron ',
             'Across the Universe ', 'Act Like It ', 'Act Your Age, Eve Brown ', 'Addicted for Now ', 'Addicted to You ', 'After ', 'After Ever Happy ', 'After I Do ',
             'After We Collided ', 'After We Fell ', 'After You ', 'Again the Magic ', 'Agnes and the Hitman ', "Ain't She Sweet? ", 'Alex, Approximately ', 'All Rhodes Lead Here ',
             'All Together Dead ', 'All Your Perfects ', 'All the Bright Places ', 'All the Feels ', 'Allegiant ', 'Almost Heaven ', 'Alone With You in the Ether ', 'Along for the Ride ',
             'Always Only You ', 'Always and Forever, Lara Jean ', 'American Queen ', 'American Royals ', "Amy & Roger's Epic Detour ", 'An Abundance of Katherines ',
             'An Echo in the Bone ', 'An Ember in the Ashes ', 'An Enchantment of Ravens ', 'An Extraordinary Union ', 'An Offer From a Gentleman ', 'Angelfall ', 'Angels Fall ',
             "Angels' Blood ", 'Anna Dressed in Blood ', 'Anna Karenina ', 'Anna and the French Kiss ', 'Any Duchess Will Do ', 'Anyone But You ', 'Arabella ', "Archangel's Consort ",
             "Archangel's Kiss ", "Archer's Voice ", 'Aristotle and Dante Discover the Secrets of the Universe ', 'Aristotle and Dante Dive into the Waters of the World ',
             'At First Sight ', "At Grave's End ", 'Atonement ', 'Attachments ', 'Austenland ', 'Autoboyography ', 'Ayesha at Last ', 'Backstage Pass ', 'Barbarian Alien ',
             'Barbarian Lover ', 'Bared to You ', 'Battle Royal ', 'Be with Me ', 'Beach Read ', 'Beard Science ', 'Beard in Mind ', 'Beastly ', 'Beautiful Bastard ', 'Beautiful Bitch ',
             'Beautiful Creatures ', 'Beautiful Darkness ', 'Beautiful Disaster ', 'Beautiful Oblivion ', 'Beautiful Player ', 'Beautiful Secret ', 'Beautiful Stranger ',
             'Beautiful World, Where Are You ', 'Beauty and the Blacksmith  ', 'Beauty and the Mustache ', 'Beauty from Pain ', 'Beauty: A Retelling of the Story of Beauty and the Beast ',
             'Because of Low ', 'Because of Miss Bridgerton ', 'Bed of Roses ', 'Before I Fall ', 'Before Jamaica Lane ', 'Before We Were Strangers ', 'Below Zero ', 'Bet Me ',
             'Betrayed ', 'Better Than the Movies ', 'Beyond the Highland Mist ', 'Big Rock ', 'Birthday Girl ', 'Bitten ', 'Bittersweet ', 'Black Hills ', 'Black Rose ', 'Blackmoore ',
             'Blameless ', 'Blood Bound ', 'Blood Brothers ', 'Blood Promise ', 'Bloodfever ', 'Bloodlines ', 'Bloom ', 'Blue Dahlia ', 'Blue Lily, Lily Blue ', 'Blue-Eyed Devil ',
             'Blurred Lines ', 'Bombshell ', 'Book Lovers ', 'Born in Fire ', 'Born in Ice ', 'Born in Shame ', 'Bossman ', 'Bound by Honor ', 'Boy Meets Boy ', 'Boyfriend Material ',
             'Boyfriend Material ', 'Branded by Fire ', 'Brazen and the Beast ', 'Breaking Dawn ', 'Breathe ', 'Breathe ', "Bridget Jones's Diary ", 'Bridget Jones: The Edge of Reason ',
             'Bright Side ', 'Bringing Down the Duke ', 'Broken Prince ', 'Brutal Prince ', 'Bully ', 'Burn for Me ', 'By Your Side ', 'By a Thread ', 'By the Book ',
             'Call Me By Your Name ', 'Call Me Irresistible ', 'Can You Keep a Secret? ', 'Captivated by You ', 'Captive Prince ', 'Captive Prince: Volume Two ', 'Captive in the Dark ',
             'Caraval ', 'Caressed by Ice ', 'Carolina Moon ', 'Carry On ', 'Catching Fire ', 'Catching Jordan ', 'Cemetery Boys ', 'Chain Reaction ', 'Champion ', 'Changeless ',
             'Chasing Cassandra ', 'Chasing Fire ', 'Checkmate ', 'Checkmate ', 'Chesapeake Blue ', 'China Rich Girlfriend ', 'Chocolat ', 'Christmas Eve at Friday Harbor ', 'Cinder ',
             'City of Ashes ', 'City of Bones ', 'City of Fallen Angels ', 'City of Glass ', 'City of Heavenly Fire ', 'City of Lost Souls ', 'Clockwork Angel ', 'Clockwork Prince ',
             'Clockwork Princess ', 'Club Dead ', 'Cold-Hearted Rake ', 'Collide ', 'Come Away with Me ', 'Confess ', 'Confessions of a Shopaholic ', 'Conventionally Yours ',
             'Conversations with Friends ', 'Corrupt ', 'Cotillion ', 'Count Your Lucky Stars ', 'Counting Down with You ', 'Covet ', 'Crash ', 'Crave ', 'Crazy Rich Asians ',
             'Crazy Stupid Bromance ', 'Credence ', 'Crescendo ', 'Cress ', 'Crooked Kingdom ', 'Crossed ', 'Crown of Midnight ', 'Cruel Beauty ', 'Cry Wolf ', 'Daisy Jones & The Six ',
             'Dance Upon the Air ', 'Dance of Thieves ', 'Dance of the Gods ', 'Dance with the Devil ', 'Dancing at Midnight ', 'Dare You To ', 'Daring to Dream ',
             'Dark Desires After Dusk ', 'Dark Lover ', "Dark Needs at Night's Edge ", 'Dark Prince ', 'Dark Witch ', 'Darkfever ', "Dash & Lily's Book of Dares ", 'Dating Dr. Dil ',
             'Dating You / Hating You ', 'Dating-ish ', 'Daughter of Smoke & Bone ', 'Daughter of the Forest  ', 'Daughter of the Pirate King ', 'Days of Blood & Starlight ',
             'Dead Reckoning ', 'Dead Until Dark ', 'Dead and Gone ', 'Dead as a Doornail ', 'Dead in the Family ', 'Dead to the World ', 'Dear Aaron ', 'Dear Ava ', 'Dear John ', 'Deep ',
             'Definitely Dead ', "Delilah Green Doesn't Care ", 'Delirium ', 'Demon from the Dark ', 'Desperate Duchesses ', 'Desperate Measures ', 'Destined for an Early Grave ',
             'Destroy Me ', 'Devil in Spring ', 'Devil in Winter ', "Devil's Bride ", "Devil's Cub ", "Devil's Daughter ", 'Dial A for Aunties ', 'Dirty ', 'Dirty Letters ',
             'Dirty Rowdy Thing ', 'Divergent ', 'Do You Want to Start a Scandal ', "Don't You Forget About Me ", 'Down London Road ', 'Down to You ', 'Dragon Actually ', 'Dragon Bound ',
             'Dragonfly in Amber ', 'Dream a Little Dream ', 'Dreamfever ', 'Dreaming of You ', 'Dreams of Gods & Monsters ', 'Driven ', 'Drums of Autumn ', "Dumplin' ", 'Easy ',
             'Eat, Pray, Love ', 'Edenbrooke ', 'Effortless ', 'Egomaniac ', 'Eleanor & Park ', 'Electric Idol ', 'Elements of Chemistry: Attraction ',
             "Eleven Scandals to Start to Win a Duke's Heart ", 'Eligible: A Modern Retelling of Pride & Prejudice ', 'Eliza and Her Monsters ', 'Ella Enchanted ', 'Emergency Contact ',
             'Emma ', 'Empire of Storms ', 'Entwined with You ', 'Evermore ', 'Every Day ', 'Every Summer After ', 'Everything Leads to You ', 'Everything, Everything ',
             'Evvie Drake Starts Over ', 'Face the Fire ', 'Faking It ', 'Faking It ', 'Fallen ', 'Fallen Crest High ', 'Fallen Too Far ', 'Falling into You ', 'Fangirl ', 'Fangirl ',
             'Fangs ', 'Fantasy Lover ', 'Far From the Madding Crowd ', 'Felix Ever After ', 'Feral Sins ', 'Field Notes on Love ', 'Fifty Shades Darker ', 'Fifty Shades Freed ',
             'Fifty Shades of Grey ', 'Fight or Flight ', 'Finale ', 'Finale ', 'Finding Cinderella ', 'Finding the Dream ', 'Fire ', 'Firelight ', 'First Comes Scandal ',
             'First Drop of Crimson ', 'First Grave on the Right ', 'Five Feet Apart ', 'Fix Her Up ', 'Fixed on You ', 'Flat-Out Love ', 'Flipped ', 'Float Plan ', 'Flock ',
             'Flowers from the Storm ', 'Forbidden ', 'Forever ', 'Forever My Girl ', 'Forever Too Far ', 'Frankly in Love ', 'Frederica ', 'Friends Without Benefits ', 'Frigid ',
             'From Blood and Ash ', 'From Dead to Worse ', 'From Lukov with Love ', 'Frostbite ', 'Full Tilt ', 'Funny You Should Ask ', "Gabriel's Inferno ", "Gabriel's Rapture ",
             'Garden Spells ', 'Geekerella ', 'Gentle Rogue ', 'Get a Life, Chloe Brown ', 'Girl Gone Viral ', 'Glass Sword ', 'Glory in Death ', 'Gone with the Wind ', 'Good Boy ',
             'Good Girl Complex ', 'Graceling ', 'Grave Mercy ', 'Grey ', 'Grin and Beard It ', 'Guilty Pleasures ', 'Half-Blood ', 'Halfway to the Grave ', 'Hands Down ',
             'Hang the Moon ', "Hani and Ishu's Guide to Fake Dating ", 'Happily Ever After ', 'Happy Ever After ', 'Hate Notes ', 'Hate to Want You ', 'Heart Bones ', 'Heart of the Sea ',
             'Heartless ', 'Hearts in Darkness ', 'Heartstopper: Volume Four ', 'Heartstopper: Volume One ', 'Heartstopper: Volume Three ', 'Heartstopper: Volume Two ',
             'Heaven and Earth ', 'Heaven, Texas ', 'Heir of Fire ', 'Hello Stranger ', 'Her Royal Highness ', 'Hero ', 'Hex Hall ', 'Hideaway ', 'Him ', 'History Is All You Left Me ',
             'Holding Up the Universe ', 'Holding the Dream ', 'Honey Girl ', "Honor's Splendour ", 'Hook, Line, and Sinker ', 'Hooked ', 'Hopeless ', 'Hostage to Pleasure ',
             'Hothouse Flower ', 'House of Earth and Blood ', 'House of Sky and Breath ', 'How to Fail at Flirting ', 'How to Marry a Marquis ', 'How to Walk Away ',
             "Howl's Moving Castle ", 'Hunting Ground ', 'Husband Material ', 'Hush, Hush ', 'I Capture the Castle ', 'I Kissed Shara Wheeler ', 'I Owe You One ',
             'I Wish You All the Best ', "I'd Tell You I Love You, But Then I'd Have to Kill You ", "I'll Give You the Sun ", "I've Got Your Number ", 'Ice Planet Barbarians ', 'Idol ',
             'If I Never Met You ', 'If I Stay ', 'If This Gets Out ', 'If the Shoe Fits ', 'Ignite Me ', 'Illuminae ', 'Immortal in Death ', 'In Bed with a Highlander ', 'In Five Years ',
             'In Flight ', 'In a Holidaze ', 'Inner Harbor ', 'Instructions for Dancing ', 'Insurgent ', 'Intercepted ', 'Iron Kissed ', 'Isla and the Happily Ever After ',
             "Isn't It Bromantic? ", "It Ain't Me, Babe ", 'It Ends with Us ', 'It Had to Be You ', 'It Happened One Autumn ', 'It Happened One Summer ', 'It Starts with Us ',
             'It Takes Two to Tumble ', "It's Not Summer Without You ", "It's in His Kiss ", 'Jane Eyre ', 'Jewels of the Sun ', "Josh and Hazel's Guide to Not Dating ",
             "Just Haven't Met You Yet ", 'Just Last Night ', 'Just Like Heaven ', 'Just Listen ', 'Just One Day ', 'Just One Year ', 'Just the Sexiest Man Alive ', 'Key of Knowledge ',
             'Key of Light ', 'Key of Valor ', 'King ', 'King of Battle and Blood ', "King's Cage ", 'Kingdom of Ash ', 'Kingdom of the Wicked ', 'Kings Rising ', 'Kiss an Angel ',
             'Kiss of Midnight ', 'Kiss of Snow ', 'Kiss of Steel ', 'Kiss of a Demon King ', 'Kiss of the Highlander ', 'Kiss of the Night ', 'Kiss the Sky ', 'Knight ', 'Kulti ',
             "Kushiel's Dart ", "Lady Chatterley's Lover ", "Lady Isabella's Scandalous Marriage ", 'Lady Luck ', 'Lady Midnight ', "Lady Sophia's Lover ", 'Landline ',
             'Last Night at the Telegraph Club ', 'Last Sacrifice ', 'Law Man ', 'Layla ', 'Lead ', 'Leah on the Offbeat ', 'Leaving Paradise ', 'Legend ', 'Legendary ', 'Leo ',
             'Let it Snow ', "Let's Talk About Love ", 'Letters to the Lost ', 'Lick ', "Life's Too Short ", 'Like Water for Chocolate ', 'Linger ', 'Little Women ',
             'Living Dead in Dallas ', 'Lock and Key ', 'Lola and the Boy Next Door ', 'Lolita ', 'Long Shot ', 'Looking for Alaska ', 'Lord of Scoundrels ', 'Lord of Shadows ',
             'Lord of the Fading Lands ', 'Lore Olympus: Volume One ', 'Losing Hope ', 'Losing It ', 'Lothaire ', 'Love & Gelato ', 'Love & Other Disasters ', 'Love From A to Z ',
             'Love Hacked ', 'Love Her or Lose Her ', 'Love Irresistibly ', 'Love Lettering ', 'Love Only Once ', 'Love Story ', 'Love Unscripted ', 'Love and Other Words ',
             'Love in the Afternoon ', 'Love in the Time of Cholera ', 'Love on the Brain ', 'Love, Rosie ', 'Lovely War ', 'Lover Avenged ', 'Lover Awakened ', 'Lover Enshrined ',
             'Lover Eternal ', 'Lover Mine ', 'Lover Reborn ', 'Lover Revealed ', 'Lover Unbound ', 'Lover Unleashed ', 'Lover at Last ', 'Luna and the Lie ', 'Magic Bites ',
             'Magic Bleeds ', 'Magic Slays ', 'Magic Study ', 'Making Faces ', 'Malibu Rising ', 'Managed ', 'Mansfield Park ', 'Marked ', 'Marriage for One ', 'Married by Morning ',
             'Marrying Winterborne ', 'Master of Crows ', 'Match Me If You Can ', 'Matched ', 'Maybe Not ', 'Maybe Someday ', 'Maybe in Another Life ', 'Me Before You ', 'Meet Cute ',
             'Meet Me in the Margins ', 'Memoirs of a Geisha ', 'Message in a Bottle ', 'Midnight Bayou ', 'Midnight Sun ', 'Midnight Sun  ', 'Mine Till Midnight ', 'Mine to Possess ',
             'Minx ', 'Mockingjay ', 'Montana Sky ', 'Moon Called ', "Morrigan's Cross ", 'Motorcycle Man ', 'Mr. Cavendish, I Presume ', 'Mr. Perfect ', 'Mr. Wrong Number ',
             'Much Ado About You ', 'My Favorite Half-Night Stand ', 'My Favorite Mistake ', 'My Killer Vacation ', 'My Lady Jane ', 'My Life Next Door ', 'My Not So Perfect Life ',
             'My True Love Gave to Me: Twelve Holiday Stories ', 'Mystery Man ', 'Naked ', 'Naked in Death ', 'Natural Born Charmer ', 'Neanderthal Seeks Human ', 'Neon Gods ',
             'Never Judge a Lady by Her Cover ', 'Never Let Me Go ', 'Never Love a Highlander ', 'Never Never ', 'Never Never: Part Two ', 'Never Seduce a Scot ', 'Never Too Far ',
             'New Moon ', "Nick & Norah's Infinite Playlist ", 'Night Embrace ', 'Night Play ', 'Night Pleasures ', 'Nights in Rodanthe ', 'Nine Rules to Break When Romancing a Rake ',
             'No Good Duke Goes Unpunished ', 'No Rest for the Wicked ', "Nobody's Baby But Mine ", 'Normal People ', 'North and South ', 'Northanger Abbey ', 'Northern Lights ',
             'Norwegian Wood ', 'November 9 ', 'Obsidian ', 'On Dublin Street ', 'On the Edge ', 'On the Fence ', 'On the Island ', 'On the Way to the Wedding ', 'Once Burned ',
             'Once Ghosted, Twice Shy ', 'Once Upon a Broken Heart ', "Once Upon a Winter's Eve ", 'Once and Always ', 'Once and for All ', 'One Dance with a Duke ', 'One Day ',
             'One Day in December ', 'One Foot in the Grave ', 'One Good Earl Deserves a Lover ', 'One Last Stop ', 'One Plus One ', 'One True Loves ', 'One Week Girlfriend ',
             'One for the Money ', 'One of Us Is Lying ', 'One to Watch ', 'One with You ', 'Only Mostly Devastated ', "Only When It's Us ", 'Onyx ', 'Opal ', 'Opposite of Always ',
             'Opposition ', 'Origin ', 'Outlander ', 'Own the Wind ', 'P.S. I Like You ', 'P.S. I Love You ', 'P.S. I Still Love You ', 'Pandemonium ', 'Paper Princess ', 'Paper Towns ',
             'Paradise ', 'Part of Your World ', 'Party of Two ', "Payback's a Witch ", 'People We Meet on Vacation ', 'Perfect ', 'Perfect Chemistry ', 'Perfect on Paper ', 'Perfection ',
             'Persuasion ', 'Pestilence ', 'Play ', 'Play of Passion ', 'Playing for Keeps ', 'Pleasure Unbound ', 'Pleasure of a Dark Prince ', 'Point of Retreat ', 'Poison Study ',
             'Polaris Rising ', 'Portrait of a Scotsman ', 'Practice Makes Perfect ', 'Pretty Reckless ', 'Pride ', 'Pride and Prejudice ', 'Pride, Prejudice, and Other Flavors ',
             'Priest ', 'Prodigy ', 'Pucked ', 'Pumpkinheads ', 'Punk 57 ', 'Pushing the Limits ', 'Queen of Shadows ', 'Radiance ', 'Rafe ', 'Rainshadow Road ', 'Ransom ', 'Rapture ',
             'Ravished ', 'Reached ', 'Real ', "Reaper's Property ", 'Reason to Breathe ', 'Rebecca ', 'Reckless ', 'Red Lily ', 'Red Queen ', 'Red, White & Royal Blue ',
             'Redeeming Love ', 'Reflected in You ', 'Regretting You ', 'Release Me ', 'Remember Me? ', 'Reminders of Him ', 'Requiem ', 'Restore Me ', 'Rhapsodic ',
             'Rhythm, Chord & Malykhin ', 'Rich People Problems ', 'Ricochet ', 'Rising Tides ', 'Rival ', 'Rock Chick ', 'Rock Chick Rescue ', 'Romancing Mister Bridgerton ',
             'Romancing the Duke ', 'Romeo and Juliet ', 'RoomHate ', 'Roomies ', 'Rosaline Palmer Takes the Cake ', 'Royal Holiday ', 'Royally Matched ', 'Royally Screwed ', 'Royals ',
             'Rubinrot ', 'Ruckus ', 'Ruin and Rising ', 'Rule ', 'Rules of Attraction ', 'Rush ', 'Rusty Nailed ', 'Safe Haven ', 'Saint Anything ', 'Saphirblau ', 'Saving Grace ',
             'Savor the Moment ', 'Say Yes to the Marquess ', 'Scandal in Spring ', 'Scandalous ', 'Scarlet ', 'Sea Swept ', 'Second Chance Summer ', 'Second First Impressions ',
             'Secrets of a Summer Night ', 'Seduce Me at Sunrise ', 'Seduction and Snacks ', 'Seduction of a Highland Lass ', 'Seize the Night ', 'Sense and Sensibility ',
             'Serpent & Dove ', 'Set on You ', 'Seven Days in June ', 'Shades of Milk and Honey ', 'Shadow Kiss ', 'Shadow Spell ', 'Shadow and Bone ', 'Shadow of Night ', 'Shadowfever ','Shatter Me ', 'She Drives Me Crazy ', 'She Gets the Girl ', 'Shelter Mountain ', 'Shipped ', 'Shiver ', 'Siege and Storm ', 'Silence ', 'Silver Borne ',
             'Simon vs. the Homo Sapiens Agenda ', 'Simply Irresistible ', "Since You've Been Gone ", 'Sins & Needles ', 'Six of Crows ', 'Slammed ', 'Slave to Sensation ',
             'Slightly Dangerous ', 'Slightly Married ', 'Slippery Creatures ', 'Smaragdgrün ', 'Smooth Talking Stranger ', 'Someone Like You ', 'Someone to Watch Over Me ',
             'Something About You ', 'Something Blue ', 'Something Borrowed ', 'Something Wilder ', 'Something Wonderful ', 'Something to Talk About ', 'Sorcery of Thorns ', 'Soulless ',
             'Sparrow ', 'Spell of the Highlander ', 'Spin the Dawn ', 'Spirit Bound ', 'Splendid ', 'Spoiler Alert ', 'Stalking Jack the Ripper ', 'Starcrossed ', 'Stardust ',
             'Stargirl ', 'Starry Eyes ', 'Stay with Me ', 'Stepbrother Dearest ', 'Still Me ', 'Strange the Dreamer ', 'Stuck with You ', 'Stuck-Up Suit ', 'Succubus Blues ',
             'Suddenly You ', 'Sugar Daddy ', 'Sustained ', 'Swear on This Life ', 'Sweet Dreams ', 'Sweet Evil ', 'Sweet Filthy Boy ', 'Sweet Temptation ', 'Sylvester ',
             'Take a Hint, Dani Brown ', 'Tangled ', 'Tears of the Moon ', 'Tell Me Three Things ', 'Tempt Me at Twilight ', 'Tempting the Best Man ', 'Ten Things I Love About You ',
             'Ten Tiny Breaths ', 'Ten Ways to Be Adored When Landing a Lord ', 'Terms and Conditions  ', "Tess of the D'Urbervilles ", 'The 5th Wave ', 'The Age of Innocence ',
             'The Air He Breathes ', 'The American Roommate Experiment ', "The Assassin's Blade ", 'The Baller ', 'The Best Man ', 'The Best Thing ', 'The Best of Me ',
             'The Bird and the Sword ', 'The Blue Castle ', 'The Bodyguard ', 'The Book of Life ', 'The Bookish Life of Nina Hill ', 'The Bookshop on the Corner ', 'The Boy Next Door ',
             'The Boy Who Sneaks in My Bedroom Window ', 'The Boyfriend Project ', 'The Bride ', 'The Bride Test ', 'The Bridge Kingdom ', 'The Bridgertons: Happily Ever After ',
             'The Bridges of Madison County ', 'The Bromance Book Club ', 'The Bronze Horseman ', 'The Charm Offensive ', 'The Chase ', 'The Cheat Sheet ', 'The Choice ',
             'The Coincidence of Callie & Kayden ', 'The Countess Conspiracy ', 'The Crown ', 'The Cruel Prince ', 'The DUFF: Designated Ugly Fat Friend ', 'The Dare ',
             'The Dark Highlander ', 'The Darkest Kiss ', 'The Darkest Minds ', 'The Darkest Night ', 'The Darkest Temptation ', 'The Dating Plan ', 'The Day of the Duchess ',
             'The Dead Romantics ', 'The Deal ', 'The Distance Between Us ', 'The Dream Thieves ', 'The Duchess Deal ', 'The Duchess War ', "The Duke Who Didn't ", 'The Duke and I ',
             'The Duke and I ', 'The Edge of Never ', 'The Elite ', 'The Ex Hex ', 'The Ex Talk ', 'The Falling in Love Montage ', 'The Fastest Way to Fall ', 'The Fault in Our Stars ',
             'The Fiery Cross ', 'The Fill-In Boyfriend ', 'The Fine Print ', 'The Flatshare ', 'The Friend Zone ', 'The Friend Zone ', 'The Gamble ', 'The Game Plan ',
             "The Gentleman's Guide to Vice and Virtue ", 'The Geography of You and Me ', 'The Girl He Used to Know ', 'The Girl You Left Behind ',
             'The Girl with the Make-Believe Husband ', 'The Goal ', 'The Golden Lily ', 'The Governess Affair ', 'The Governess Game ', 'The Grand Sophy ', 'The Great Gatsby ',
             'The Guardian ', 'The Guernsey Literary and Potato Peel Pie Society ', 'The Happy Ever After Playlist ', 'The Hating Game ', 'The Heart Principle ', 'The Heart of Betrayal ',
             'The Heir ', 'The Heiress Effect ', 'The Henna Wars ', "The Highlander's Touch ", 'The Highwayman ', 'The Holiday Swap ', 'The Hollow ', "The Honey-Don't List ",
             'The Hook Up ', 'The Hooker and the Hermit ', 'The Host ', 'The House in the Cerulean Sea ', 'The Hunger Games ', 'The Immortal Highlander ', 'The Indigo Spell ',
             'The Inheritance Games ', 'The Intimacy Experiment ', 'The Invisible Life of Addie LaRue ', 'The Iron Daughter ', 'The Iron Duke ', 'The Iron King ', 'The Iron Queen ',
             'The King ', 'The Kiss Quotient ', 'The Kiss Thief ', 'The Kiss of Deception ', "The Lady's Guide to Celestial Mechanics ", 'The Last Boyfriend ',
             'The Last Letter from Your Lover ', 'The Last Song ', 'The Legacy ', 'The Light We Lost ', 'The Longest Ride ', 'The Lost Duke of Wyndham ', 'The Love Hypothesis ',
             'The Love Hypothesis ', "The Lover's Dictionary ", 'The Lucky One ', 'The Luxe ', 'The Maddest Obsession ', 'The Madness of Lord Ian Mackenzie ', 'The Magpie Lord ',
             'The Marriage Bargain ', 'The Marriage Game ', 'The Mighty Storm ', 'The Mistake ', 'The Next Always ', 'The Night Circus ', 'The No-Show ', 'The Notebook ', 'The Obsession ',
             'The One ', 'The Opportunist ', 'The Other Boleyn Girl ', 'The Other Miss Bridgerton ', 'The Pagan Stone ', 'The Perfect Hope ', 'The Perfect Play ',
             'The Phantom of the Opera ', 'The Play ', 'The Price of Salt ', 'The Prince ', 'The Prince and the Dressmaker ', 'The Princess Bride ', 'The Princess Diaries ',
             'The Princess Trap ', 'The Prize ', 'The Problem with Forever ', 'The Proposal ', 'The Proposal ', 'The Proposition ', 'The Queen of Nothing ',
             'The Queer Principles of Kit Webb ', 'The Raven Boys ', 'The Raven King ', 'The Raven Prince ', 'The Rescue ', 'The Right Swipe ', 'The Risk ', 'The Risk ', 'The Road Trip ',
             'The Rogue Not Taken ', 'The Roommate ', 'The Rose & the Dagger ', 'The Rosie Effect ', 'The Rosie Project ', 'The Roughest Draft ', 'The Royal We ', 'The Score ',
             'The Scorpio Races ', 'The Sea of Tranquility ', 'The Search ', 'The Secret ', 'The Secret Diaries of Miss Miranda Cheever ', 'The Secret History of the Pink Carnation ',
             'The Secret of Ella and Micha ', 'The Secrets of Sir Richard Kenworthy ', 'The Seven Husbands of Evelyn Hugo ', 'The Shadows Between Us ', 'The Silver Linings Playbook ',
             'The Simple Wild ', 'The Siren ', 'The Sisterhood of the Traveling Pants ', 'The Sky Is Everywhere ', "The Soldier's Scoundrel ", 'The Song of Achilles ',
             'The Song of Achilles ', 'The Soulmate Equation ', 'The Spanish Love Deception ', 'The Statistical Probability of Love at First Sight ', 'The Stopover ',
             'The Suffragette Scandal ', 'The Sum of All Kisses ', 'The Summer I Turned Pretty ', 'The Summer of Broken Rules ', 'The Sun Is Also a Star ', 'The Sweet Gum Tree ',
             'The Sweetest Oblivion ', 'The Sweetest Thing ', 'The Switch ', 'The Thorn Birds ', "The Time Traveler's Wife ", 'The Tourist Attraction ', 'The Trouble with Hating You ',
             'The Truth About Forever ', 'The Two Lives of Lydia Bird ', 'The Ugly Duchess ', 'The Unbecoming of Mara Dyer ', 'The Undomestic Goddess ', 'The Unexpected Everything ',
             'The Unhoneymooners ', 'The Unwanted Wife ', 'The Upside of Falling ', 'The Upside of Unrequited ', 'The Villa ', 'The Vincent Boys ', 'The Viscount Who Loved Me ',
             'The Wall of Winnipeg and Me ', 'The Wallflower Wager ', 'The Warlord Wants Forever ', 'The Wedding ', 'The Wedding ', 'The Wedding Crasher ', 'The Wedding Date ',
             'The Wedding Party ', 'The Wicked King ', 'The Will ', "The Winner's Crime ", "The Winner's Curse ", "The Winner's Kiss ", 'The Winter King ', 'The Winter Sea ',
             'The Wisteria Society of Lady Scoundrels ', 'The Witness ', 'The Worst Best Man ', 'The Wrath and the Dawn ', 'The Year We Fell Down ', 'The Crown of Gilded Bones ',
             'Then Came You ', 'These Broken Stars ', 'These Old Shades ', 'These Violent Delights ', 'They Both Die at the End ', 'Things We Never Got Over ','Things We Never Got Over ',
             'Things You Save in a Fire ', 'This Girl ', 'This Heart of Mine ', 'This Is What Happy Looks Like ', 'This Lullaby ', 'This Man ', 'This Side of the Grave ',
             'This Time Next Year ', 'This is How You Lose the Time War ', 'Thoughtless ', 'Throttled ', "To All the Boys I've Loved Before ", 'To Catch an Heiress ',
             'To Hate Adam Connor ', 'To Have and to Hoax ', 'To Kill a Kingdom ', 'To Kill a Kingdom ', 'To Love Jason Thorn ', 'To Love and to Loathe ', 'To Sir Phillip, With Love ',
             'To Sir, with Love ', 'To Tame a Highland Warrior ', 'Today Tonight Tomorrow ', 'Tokyo Ever After ', 'Too Late ', 'Tools of Engagement ', 'Top Secret ', 'Torment ',
             'Tower of Dawn ', 'Trade Me ', 'Transcendence ', 'True Believer ', 'Truth or Beard ', 'Turtles All the Way Down ', 'Tweet Cute ', 'Twenties Girl ', 'Twice Tempted ',
             'Twice in a Blue Moon ', 'Twilight ', 'Twisted Lies ', 'Twisted Love ', 'Twisted Palace ', 'Twisted Perfection ', 'Uglies ', 'Ugly Love ', 'Under Locke ', 'Under One Roof ',
             'Under the Never Sky ', 'Under the Whispering Door ', 'Under the Whispering Door ', 'Undercover Bromance ', 'Unearthly ', 'Unravel Me ', 'Until Friday Night ',
             'Until November ', 'Until You ', 'Unveiled ', 'Uprooted ', 'Us ', 'Valley of Silence ', 'Vampire Academy ', 'Venetia ', 'Verity ', 'Vicious ', 'Virgin River ',
             'Vision in White ', 'Visions of Heat ', 'Voyager ', 'Wait for It ', 'Wait for You ', 'Waiting for Tom Hanks ', 'Walking Disaster ', 'Wallbanger ', 'Warm Bodies ',
             'Warprize  ', 'Water for Elephants ', 'Wayward Son ', 'We Were Liars ', "We'll Always Have Summer ", "We'll Always Have Summer ", 'Weather Girl ', 'Wedding Night ',
             'Welcome to Temptation ', 'Well Matched ', 'Well Met ', 'Well Played ', 'What Happened to Goodbye ', 'What Happens in London ', 'What I Did for Love ', "What If It's Us ",
             'When Beauty Tamed the Beast ', 'When Dimple Met Rishi ', 'When He Was Wicked ', 'When a Scot Ties the Knot ', 'Where She Went ', 'Where the Crawdads Sing ',
             'While We Were Dating ', 'White Hot ', 'White Hot Kiss ', 'Whitney, My Love ', 'Wicked ', "Wicked Deeds on a Winter's Night ", 'Wicked Intentions ', 'Wicked Lovely ',
             'Wicked and the Wallflower ', 'Wild Man ', 'Wildest Dreams ', 'Wildfire ', 'Will Grayson, Will Grayson ', 'Window Shopping ', 'Winter ', 'Wintersong ', 'Without Merit ',
             'Wolfsong ', 'Words in Deep Blue ', 'World After ', 'Worth Any Price ', 'Would Like to Meet ', "Written in My Own Heart's Blood ", 'Written in the Stars ', 'Wrong ',
             'Wuthering Heights ', 'XOXO ', 'Yes No Maybe So ', 'You Deserve Each Other ', 'You Had Me at Hola ', 'You Made a Fool of Death with Your Beauty ',
             'You Should See Me in a Crown ', "You've Reached Sam "];

function updateName(selectedLi) {
    searchInput.value = "";
    addBook(selectedLi.textContent);
    wrapper.classList.remove("active");
    spanItem.textContent = selectedLi.textContent;
}

function addBook(selectedBook) {
  options.innerHTML = "";
  books.forEach(book => {
      let isSelected = book == selectedBook ? "selected" : "";
      let li = `<li id="bookName" onclick="updateName(this)" class="${isSelected}">${book}</li>`;
      options.insertAdjacentHTML("beforeend", li);
});
}
addBook();

searchInput.addEventListener("keyup", () => {
    let arr = [];
    let searchWord = searchInput.value.toLowerCase();
    arr = books.filter(data => {
        return data.toLowerCase().startsWith(searchWord);
    }).map(data => {
        let isSelected = data == selectBtn.firstElementChild.innerText ? "selected" : "";
        return `<li id="bookName" onclick="updateName(this)" class="${isSelected}">${data}</li>`;
    }).join("");
    options.innerHTML = arr ? arr : `<p style="margin-top: 10px;">Heartbreak! That book is not in our library</p>`;
});

selectBtn.addEventListener("click", () => wrapper.classList.toggle("active"));