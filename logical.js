const questions = {
    initial: {
        question: "国家应更多由政府管理还是民众管理？",
        options: {
            1: "政府",
            2: "民众"
        },
        next: {
            1: "government",
            2: "people"
        }
    },
    people: {
        question: "民众的贫富差距总体来讲应该？",
        options: {
            1: "更大好",
            2: "更小好"
        },
        next: {
            1: "economic2",
            2: "equality2"
        }
    },
    economic2: {
        question: "国家或类似组织应该存在吗？",
        options: {
            1: "应该",
            2: "不应该"
        },
        next: {
            1: "should2",
            2: "shouldnot2"
        }
    },
    should2: {
        question: "对于已经发生在了自己身上的暴力事件？",
        options: {
            1: "强烈支持用自己的武器反击、报复",
            2: "这个问题不是重点"
        },
        next: {
            1: "retaliation",
            2: "notimportant"
        }
    },
    notimportant: {
        question: "你如何看待传统价值观（比如传统家庭观念等等）？",
        options: {
            1: "应该维护",
            2: "应该质疑",
            3: "无所谓，如何选择是别人的自由"
        },
        next: {
            1: "portect",
            2: "PinkCapitalism",
            3: "othersfreedom"
        }
    },
    portect: {
        question: "我们是否需要一个君主来统治国家？",
        options: {
            1: "是",
            2: "否",
            3: "无所谓"
        },
        next: {
            1: "Korwinism",
            2: "NeoliberalConservatism",
            3: "NationalLiberalism"
        }
    },
    othersfreedom: {
        question: "发行货币是否是政府的职责？",
        options: {
            1: "是",
            2: "否"
        },
        next: {
            1: "currencyissuance",
            2: "nocurrencyissuance"
        }
    },
    nocurrencyissuance: {
        question: "你是否认为政府除了执行法律外不能有任何职责？",
        options: {
            1: "是",
            2: "否"
        },
        next: {
            1: "Voluntaryism",
            2: "outofenforcingthelaw"
        }
    },
    outofenforcingthelaw: {
        question: "关于自由市场？",
        options: {
            1: "这是最有效率的运行方式",
            2: "这是个人自由的体现"
        },
        next: {
            1: "Hayekism",
            2: "Objectivism"
        }
    },
    currencyissuance: {
        question: "对经济全球化的态度？",
        options: {
            1: "支持",
            2: "无所谓/中立"
        },
        next: {
            1: "economicglobalization",
            2: "Minarchism"
        }
    },
    economicglobalization: {
        question: "你是否支持政府应该实施反垄断？",
        options: {
            1: "是",
            2: "否"
        },
        next: {
            1: "Neoliberalism",
            2: "ClassicalLiberalism"
        }
    },
    retaliation: {
        question: "在国家中宗教、教会是否起到了非常重要的作用",
        options: {
            1: "是",
            2: "否"
        },
        next: {
            1: "religions",
            2: "noreligions"
        }
    },
    religions: {
        question: "你是否特别反对你的国家干预其他国家？",
        options: {
            1: "是",
            2: "否"
        },
        next: {
            1: "Paleolibertarianism",
            2: "LibertarianConservatism"
        }
    },
    noreligions: {
        question: "对于使用新技术升级人类，你的看法是？",
        options: {
            1: "非常支持",
            2: "这不是重点"
        },
        next: {
            1: "LibertarianTranshumanism",
            2: "noupdate"
        }
    },
    noupdate: {
        question: "对于自由市场，你的看法是？",
        options: {
            1: "完全支持自由市场",
            2: "质疑或部分反对完全的自由市场"
        },
        next: {
            1: "agreefreemarket",
            2: "disagreefreemarket"
        }
    },
    disagreefreemarket: {
        question: "你具体质疑或反对自由市场的哪一方面？",
        options: {
            1: "土地应该归所有人拥有而不是投机者",
            2: "反对大资本家，但支持小资本家"
        },
        next: {
            1: "Geolibertarianism",
            2: "DistributistLibertarianism"
        }
    },
    agreefreemarket: {
        question: "社区的存在是否实现理想社会的重点之一",
        options: {
            1: "是",
            2: "否"
        },
        next: {
            1: "yescommunity",
            2: "nocommunity"
        }
    },
    yescommunity: {
        question: "社区的作用具体是？",
        options: {
            1: "在社区内外互帮互助",
            2: "用社区隔离理念不同的人"
        },
        next: {
            1: "SocialLibertarianism",
            2: "Hoppeanism"
        }
    },
    nocommunity: {
        question: "对于别人的行为，你认为？",
        options: {
            1: "一些违反大多数人观念的事情需要被抵制",
            2: "就算我非常不喜欢这一行为，但如果没有实际影响到我，我都不会管"
        },
        next: {
            1: "Libertarianism",
            2: "LiberalLibertarianism"
        }
    },
    shouldnot2: {
        question: "对于个人行为的自由，你认为？",
        options: {
            1: "只要没有伤害、影响到他人人们可以做任何事",
            2: "支持所有人做所有想做的事，但非常影响、伤害他人的事情不提倡",
            3: "就算做伤害他人的事情也没问题"
        },
        next: {
            1: "AnarchoLiberalism",
            2: "everthing",
            3: "Avaritionism"
        }
    },
    everthing: {
        question: "你是否认为任何形式的宗教、法律、道德等等都是没有意义的",
        options: {
            1: "是",
            2: "否"
        },
        next: {
            1: "AnarchoNihilism",
            2: "AnarchoCapitalism"
        }
    },
    equality2: {
        question: "国家或类似组织应该存在吗？",
        options: {
            1: "应该",
            2: "不应该"
        },
        next: {
            1: "should",
            2: "shouldnot"
        }
    },
    should: {
        question: "生产资料（生产所需的物品）应该？",
        options: {
            1: "私有（私人所有）",
            2: "公有（公共所有）",
            3: "生活资料也要公有"
        },
        next: {
            1: "private",
            2: "public",
            3: "Communalism"
        }
    },
    private: {
        question: "你对土地与住房政策的看法",
        options: {
            1: "通过市场和环保政策解决住房问题",
            2: "通过政府福利解决住房问题",
            3: "土地不应该属于财产，应该归所有人拥有"
        },
        next: {
            1: "GreenLiberalism",
            2: "welfare",
            3: "Georgism"
        }
    },
    welfare: {
        question: "保障穷人权益与环境保护哪个应该优先执行？",
        options: {
            1: "保障穷人权益",
            2: "环境保护"
        },
        next: {
            1: "poor",
            2: "Progressivism"
        }
    },
    poor: {
        question: "你认为政府在劳动力市场中应该？",
        options: {
            1: "保护劳动者权益",
            2: "保护劳动者权益同时给予企业足够的用工灵活性"
        },
        next: {
            1: "SocialDemocracy",
            2: "NordicModel"
        }
    },
    public: {
        question: "那生产资料具体应该由谁掌控？",
        options: {
            1: "国家",
            2: "工人",
            3: "工会（工团）"
        },
        next: {
            1: "DemocraticSocialism",
            2: "worker",
            3: "union"
        }
    },
    union: {
        question: "如何上述思想？",
        options: {
            1: "通过民主途径",
            2: "通过工会罢工",
            3: "我们暂时还不需要考虑这些"
        },
        next: {
            1: "LiberalSocialism",
            2: "strike",
            3: "UtopianSocialism"
        }
    },
    strike: {
        question: "国家内需要一个君主吗？",
        options: {
            1: "需要",
            2: "不需要"
        },
        next: {
            1: "MonarchoSyndicalism",
            2: "Syndicalism"
        }
    },
    worker: {
        question: "政府的权利是否应该尽可能降到最低？",
        options: {
            1: "是",
            2: "否"
        },
        next: {
            1: "minimum",
            2: "nominimum"
        }
    },
    minimum: {
        question: "对于已经发生在了自己身上的暴力事件？",
        options: {
            1: "用自己的武器反击（甚至报复）",
            2: "寻找政府帮助"
        },
        next: {
            1: "LibertarianSocialism",
            2: "MinarchoSocialism"
        }
    },
    nominimum: {
        question: "你是否认为社会主义是《圣经》所支持的？",
        options: {
            1: "是",
            2: "否"
        },
        next: {
            1: "ChristianSocialism",
            2: "nobible"
        }
    },
    nobible: {
        question: "你认为工人的权利包括？",
        options: {
            1: "他们可以完全控制公司并拿到分红",
            2: "他们的代表还需要直接掌权进行国家的决策"
        },
        next: {
            1: "MarketSocialism",
            2: "CouncilCommunism"
        }
    },
    shouldnot: {
        question: "你是否支持在社会中应该有自由市场？",
        options: {
            1: "是",
            2: "否"
        },
        next: {
            1: "free",
            2: "nofree"
        }
    },
    free: {
        question: "社会是否应该由多个工团（工会）组成？",
        options: {
            1: "是",
            2: "否"
        },
        next: {
            1: "SyndicalistMutualism",
            2: "Mutualism"
        }
    },
    nofree: {
        question: "个人和社会哪个更重要？",
        options: {
            1: "个人",
            2: "社会"
        },
        next: {
            1: "indiv",
            2: "socie"
        }
    },
    indiv: {
        question: "你是否认为所有人类都应该回到石器时代才能实现上述思想？",
        options: {
            1: "是",
            2: "否"
        },
        next: {
            1: "AnarchoPrimitivism",
            2: "Egoism"
        }
    },
    socie: {
        question: "你反对暴力革命吗？",
        options: {
            1: "是的",
            2: "不是"
        },
        next: {
            1: "noviol",
            2: "viol"
        }
    },
    viol: {
        question: "在社会中被生产出来的资源应该如何分配？",
        options: {
            1: "主要通过工会的直接控制",
            2: "通过社区与工会基于“各取所需”分配",
            3: "基于“各取所需”且不通过社区与工会"
        },
        next: {
            1: "AnarchoSyndicalism",
            2: "SocialAnarchism",
            3: "AnarchoCommunism"
        }
    },
    noviol: {
        question: "你认为以社区和地方为单位的自治在实现社会变革中的作用是？",
        options: {
            1: "关键性的",
            2: "辅助性的"
        },
        next: {
            1: "key",
            2: "auxil"
        }
    },
    key: {
        question: "关于犹太人复国你认为？",
        options: {
            1: "如果他们要复国那至少应该使用合适的制度",
            2: "这个问题不是关注的重点"
        },
        next: {
            1: "DemocraticConfederalism",
            2: "LibertarianMunicipalism"
        }
    },
    auxil: {
        question: "对于物理规律（重力、惯性等）？",
        options: {
            1: "应该通过科技手段废除",
            2: "啊？？？（不该废除/这不是重点）"
        },
        next: {
            1: "Soulism",
            2: "AnarchoPacifism"
        }
    },
    government: {
        question: "民众的贫富差距总体来讲应该？",
        options: {
            1: "更大好",
            2: "更小好"
        },
        next: {
            1: "economic",
            2: "equality"
        }
    },
    equality: {
        question: "国家内应该实行哪种经济模式？",
        options: {
            1: "市场经济",
            2: "计划经济",
            3: "混合计划经济和市场经济",
            4: "无所谓",
        },
        next: {
            1: "market",
            2: "command",
            3: "mixed",
            4: "notall"
        }
    },
    command: {
        question: "我们应该在哪些地方实现上述思想？",
        options: {
            1: "自己的国家/民族内",
            2: "不能仅限于自己的国家/民族",
            3: "不能仅限于自己的国家，但在特定的民族内",
        },
        next: {
            1: "national",
            2: "inter",
            3: "Strasserism",
        }
    },
    national: {
        question: "你更倾向于在哪些人之中实现上述思想？",
        options: {
            1: "国家内，包括所有国民",
            2: "在指定的民族/种族内"
        },
        next: {
            1: "civil",
            2: "race"
        }
    },
    race: {
        question: "国家内的经济需要工团来领导吗？",
        options: {
            1: "需要",
            2: "最好是国家直接掌控"
        },
        next: {
            1: "NationalSyndicalism",
            2: "direct"
        }
    },
    direct: {
        question: "减小贫富差距和排斥一些其他民族哪个优先级更高？",
        options: {
            1: "减小贫富差距",
            2: "排斥其他民族"
        },
        next: {
            1: "NationalBolshevism",
            2: "Bolsheviknationalism"
        }
    },
    civil: {
        question: "对于土地改革与农业集体化的看法",
        options: {
            1: "彻底土地改革和农业集体化",
            2: "土地改革但对农业集体化态度灵活",
            3: "土地改革并支持小农经济",
        },
        next: {
            1: "conple",
            2: "flex",
            3: "peasant",
        }
    },
    conple: {
        question: "你对经济现代化和工业化的政策",
        options: {
            1: "通过国家控制快速工业化更优先",
            2: "农村工业化和群众动员更优先",
            3: "国家控制经济，同时注重农业集体化",
        },
        next: {
            1: "Stalinism",
            2: "Maoism",
            3: "Castroism",
        }
    },
    flex: {
        question: "对于帝国主义，你的看法是？",
        options: {
            1: "这是不公正的秩序，导致了资源的不平等分配",
            2: "强烈反对，帝国主义是造成贫困和动荡的根源"
        },
        next: {
            1: "MonarchoSocialism",
            2: "Mugabeism"
        }
    },
    peasant: {
        question: "对于反对革命的人我们应该？",
        options: {
            1: "我们反对反革命者",
            2: "处决他们"
        },
        next: {
            1: "LeftWingNationalism",
            2: "Jacobinism"
        }
    },
    inter: {
        question: "你对新技术的态度",
        options: {
            1: "只对能实现目标的接受",
            2: "对目前有利的接受",
            3: "是在现在看来可能不利的技术也要尝试",
        },
        next: {
            1: "Collectivism",
            2: "now",
            3: "try",
        }
    },
    try: {
        question: "实现上述思想的途径？",
        options: {
            1: "民主途径",
            2: "革命途径"
        },
        next: {
            1: "LeftWingPopulism",
            2: "Trotskyism"
        }
    },
    now: {
        question: "你对待传统的态度？",
        options: {
            1: "拒绝或重构传统",
            2: "传统选择性保留"
        },
        next: {
            1: "rebui",
            2: "Baathism"
        }
    },
    rebui: {
        question: "在你的理想中，我们是否应该把所有人的大脑组装成一个集体大脑控制所有人？",
        options: {
            1: "是",
            2: "否"
        },
        next: {
            1: "HiveMindCollectivism",
            2: "nohivemind"
        }
    },
    nohivemind: {
        question: "对斯大林时期的苏联你的态度是？",
        options: {
            1: "持积极态度，至少认为可以学到一些教训",
            2: "持批评态度，可能更倾向于支持其他形式"
        },
        next: {
            1: "Marxism",
            2: "criti"
        }
    },
    criti: {
        question: "上述思想在不同国家内实现应该？",
        options: {
            1: "在每个国家内应该相差不大",
            2: "对于不同的国家有略微不同的变化"
        },
        next: {
            1: "LeftCommunism",
            2: "Eurocommunism"
        }
    },
    market: {
        question: "我们如何在市场经济的模式下降低贫富差距？",
        options: {
            1: "通过税收平衡财富",
            2: "通过把大企业拆分成数个小企业平衡财富"
        },
        next: {
            1: "ThirdWay",
            2: "Distributism"
        }
    },
    mixed: {
        question: "我们应该如何协调同时使用市场经济和计划经济所造成的冲突？",
        options: {
            1: "实行工人自治，并在工人与政府之间设置类似“经理”的角色",
            2: "政府在较重要的领域介入并直接管控"
        },
        next: {
            1: "Titoism",
            2: "intervene"
        }
    },
    intervene: {
        question: "政府是否因该实施广泛的社会福利？",
        options: {
            1: "是",
            2: "否"
        },
        next: {
            1: "Longism",
            2: "StateCapitalism"
        }
    },
    notall: {
        question: "对待新技术我们应该？",
        options: {
            1: "逐渐尝试",
            2: "尽可能使用技术升级人类"
        },
        next: {
            1: "EnlightenedAbsolutism",
            2: "SocialistTranshumanism"
        }
    },
    economic: {
        question: "土地所有权多数应该归？",
        options: {
            1: "国家",
            2: "组织 (法团)",
            3: "个人",
            4: "都可以，无所谓"
        },
        next: {
            1: "state",
            2: "organization",
            3: "individual",
            4: "indifferent"
        }
    },
    individual: {
        question: "对全球化的态度？",
        options: {
            1: "支持",
            2: "反对",
            3: "都可以，无所谓",
        },
        next: {
            1: "agreeglob",
            2: "disglob",
            3: "notcare"
        }
    },
    disglob: {
        question: "这个世界上的民族/种族？",
        options: {
            1: "存在一个/多个占绝对优势的",
            2: "都差不多不"
        },
        next: {
            1: "adv",
            2: "disadv"
        }
    },
    disadv: {
        question: "你对于现状的看法",
        options: {
            1: "维持",
            2: "应采取主动手段维护"
        },
        next: {
            1: "Conservatism",
            2: "Trumpism"
        }
    },
    adv: {
        question: "对于其他不占优势的民族、群体、种族",
        options: {
            1: "驱逐、征服或远离",
            2: "尽可能的欺负他们"
        },
        next: {
            1: "deportation",
            2: "SocialDarwinism"
        }
    },
    deportation: {
        question: "对于国家的结构？",
        options: {
            1: "建立一个种族纯净的白人国家",
            2: "不一定是白人国家"
        },
        next: {
            1: "WhiteNationalism",
            2: "NationalCapitalism"
        }
    },
    agreeglob: {
        question: "关于君主我们？",
        options: {
            1: "需要一个被限制权利的君主",
            2: "国家内不应该有君主"
        },
        next: {
            1: "ConstitutionalMonarchism",
            2: "notneed"
        }
    },
    notneed: {
        question: "环境和经济哪个更重要？",
        options: {
            1: "环境保护优先",
            2: "经济发展优先"
        },
        next: {
            1: "env",
            2: "eco"
        }
    },
    eco: {
        question: "政府对经济应该？",
        options: {
            1: "减少干预",
            2: "对经济的干预尽可能降到最低"
        },
        next: {
            1: "redu",
            2: "minredu"
        }
    },
    redu: {
        question: "你对共产主义的看法",
        options: {
            1: "应该在世界范围内积极的反共",
            2: "这通常是不好的"
        },
        next: {
            1: "anticommu",
            2: "LiberalConservatism"
        }
    },
    anticommu: {
        question: "在全球范围内的干预政策应该使用？",
        options: {
            1: "直接的军事手段",
            2: "外交手段/间接的军事手段"
        },
        next: {
            1: "Neoconservatism",
            2: "Reaganism"
        }
    },
    minredu: {
        question: "我们是否需要一个世界帝国去传播自由主义？",
        options: {
            1: "是",
            2: "否"
        },
        next: {
            1: "StateLiberalism",
            2: "EconomicLiberalism"
        }
    },
    env: {
        question: "国家是否应该建立在基督教的价值观下？",
        options: {
            1: "是",
            2: "否"
        },
        next: {
            1: "ChristianDemocracy",
            2: "nochrist"
        }
    },
    nochrist: {
        question: "对于自由市场我们应该？",
        options: {
            1: "接受",
            2: "积极地维护"
        },
        next: {
            1: "Liberalism",
            2: "OrdoLiberalism"
        }
    },
    notcare: {
        question: "你对共产主义的看法",
        options: {
            1: "这通常是不好的",
            2: "把他们全部逮捕、处决"
        },
        next: {
            1: "AuthoritarianCapitalism",
            2: "Pinochetism"
        }
    },
    organization: {
        question: "我们是否应该建立一个以过去的天主教为基础的社会？",
        options: {
            1: "是",
            2: "否"
        },
        next: {
            1: "Integralism",
            2: "Corporatism"
        }
    },
    state: {
        question: "我自己的种族/民族?",
        options: {
            1: "比其它的优越",
            2: "和其它的差不多"
        },
        next: {
            1: "batter",
            2: "same"
        }
    },
    batter: {
        question: "对你来讲哪个更重要？",
        options: {
            1: "国家的统一和力量",
            2: "种族的纯净性"
        },
        next: {
            1: "Fascism",
            2: "NationalSocialism"
        }
    },
    same: {
        question: "在你看来国家应该？",
        options: {
            1: "有统治力",
            2: "对个人有绝对的、百分之百的控制"
        },
        next: {
            1: "control",
            2: "abscontrol"
        }
    },
    abscontrol: {
        question: "我们是否需要把领导人当作神来崇拜？",
        options: {
            1: "是",
            2: "否/无所谓"
        },
        next: {
            1: "Kraterocracy",
            2: "IngSoc"
        }
    },
    control: {
        question: "我们是否需要一个君主来统治国家？",
        options: {
            1: "是",
            2: "否/无所谓"
        },
        next: {
            1: "Monarchism",
            2: "Nomonarchism"
        }
    },
    Nomonarchism: {
        question: "你对待外国的策略是什么？",
        options: {
            1: "对外开放政策，吸引外资和技术",
            2: "对外扩展影响力，控制或剥削他国资源"
        },
        next: {
            1: "SocialismwithChinesecharacteristics",
            2: "Imperialism"
        }
    },
    indifferent: {
        question: "除了特别有必要的情况以外，我们应该对现状进行改变吗？",
        options: {
            1: "是",
            2: "否"
        },
        next: {
            1: "change",
            2: "statusQuo"
        }
    },
    change: {
        question: "国家是否应该多出口少进口而从全世界吸取财富？",
        options: {
            1: "是",
            2: "否"
        },
        next: {
            1: "Mercantilism",
            2: "Bismarckism"
        }
    },
    statusQuo: {
        question: "你对同性恋的看法",
        options: {
            1: "支持",
            2: "反对"
        },
        next: {
            1: "Homoconservatism",
            2: "Reactionary"
        }
    },
    Integralism: {
        result: "结果：整合主义",
        image: "Integralism_img.png"
    },
    Corporatism: {
        result: "结果：法团主义",
        image: "Corporatism_img.png"
    },
    Mercantilism: {
        result: "结果：重商主义",
        image: "Mercantilism_img.png"
    },
    Bismarckism: {
        result: "结果：俾斯麦主义",
        image: "Bismarckism_img.jpeg"
    },
    Homoconservatism: {
        result: "结果：LGBT保守主义",
        image: "Homoconservatism_img.png"
    },
    Reactionary: {
        result: "结果：反动主义",
        image: "Reactionary_img.png"
    },
    Fascism: {
        result: "结果：法西斯主义",
        image: "Fascism_img.png"
    },
    NationalSocialism: {
        result: "结果：纳粹主义",
        image: "NationalSocialism_img.png"
    },
    Monarchism: {
        result: "结果：君主制",
        image: "Monarchism_img.png"
    },
    Imperialism: {
        result: "结果：帝国主义",
        image: "Imperialism_img.png"
    },
    IngSoc: {
        result: "结果：英社主义",
        image: "IngSoc_img.png"
    },
    Kraterocracy: {
        result: "结果：Kraterocracy (独裁主义?)",
        image: "Kraterocracy_img.png"
    },
    AuthoritarianCapitalism: {
        result: "结果：威权资本主义",
        image: "AuthoritarianCapitalism_img.png"
    },
    Pinochetism: {
        result: "结果：皮诺切特主义",
        image: "Pinochetism_img.png"
    },
    Trumpism: {
        result: "结果：特朗普主义",
        image: "Trumpism_img.png"
    },
    Conservatism: {
        result: "结果：保守主义",
        image: "Conservatism_img.png"
    },
    SocialDarwinism: {
        result: "结果：社会达尔文主义",
        image: "SocialDarwinism_img.png"
    },
    WhiteNationalism: {
        result: "结果：白人至上主义",
        image: "WhiteNationalism_img.png"
    },
    NationalCapitalism: {
        result: "结果：民族资本主义",
        image: "NationalCapitalism_img.png"
    },
    ConstitutionalMonarchism: {
        result: "结果：君主立宪制",
        image: "ConstitutionalMonarchism_img.png"
    },
    ChristianDemocracy: {
        result: "结果：基督教民主主义",
        image: "ChristianDemocracy_img.png"
    },
    Liberalism: {
        result: "结果：自由主义",
        image: "Liberalism_img.png"
    },
    OrdoLiberalism: {
        result: "结果：秩序自由主义",
        image: "OrdoLiberalism_img.png"
    },
    LiberalConservatism: {
        result: "结果：自由保守主义",
        image: "LiberalConservatism_img.png"
    },
    StateLiberalism: {
        result: "结果：国家自由主义",
        image: "StateLiberalism_img.png"
    },
    EconomicLiberalism: {
        result: "结果：经济自由主义",
        image: "EconomicLiberalism_img.png"
    },
    Neoconservatism: {
        result: "结果：新保守主义",
        image: "Neoconservatism_img.png"
    },
    Reaganism: {
        result: "结果：里根主义",
        image: "Reaganism_img.png"
    },
    ThirdWay: {
        result: "结果：第三条道路",
        image: "ThirdWay_img.png"
    },
    Distributism: {
        result: "结果：分产主义",
        image: "Distributism_img.png"
    },
    Titoism: {
        result: "结果：铁托主义",
        image: "Titoism_img.png"
    },
    Longism: {
        result: "结果：休伊•朗主义",
        image: "Longism_img.png"
    },
    EnlightenedAbsolutism: {
        result: "结果：开明君主制",
        image: "EnlightenedAbsolutism_img.png"
    },
    SocialistTranshumanism: {
        result: "结果：社会主义超人类主义",
        image: "SocialistTranshumanism_img.png"
    },
    Strasserism: {
        result: "结果：斯特拉瑟主义",
        image: "Strasserism_img.png"
    },
    Collectivism: {
        result: "结果：集体主义",
        image: "Collectivism_img.png"
    },
    LeftWingPopulism: {
        result: "结果：左翼民粹主义",
        image: "LeftWingPopulism_img.png"
    },
    Trotskyism: {
        result: "结果：托洛茨基主义",
        image: "Trotskyism_img.png"
    },
    Baathism: {
        result: "结果：复兴主义",
        image: "Baathism_img.png"
    },
    HiveMindCollectivism: {
        result: "结果：蜂群思维集体主义",
        image: "HiveMindCollectivism_img.png"
    },
    Marxism: {
        result: "结果：正统马克思主义",
        image: "Marxism_img.png"
    },
    LeftCommunism: {
        result: "结果：左翼共产主义",
        image: "LeftCommunism_img.png"
    },
    Eurocommunism: {
        result: "结果：欧洲共产主义",
        image: "Eurocommunism_img.png"
    },
    NationalSyndicalism: {
        result: "结果：民族工团主义",
        image: "NationalSyndicalism_img.png"
    },
    NationalBolshevism: {
        result: "结果：民族布尔什维克主义",
        image: "NationalBolshevism_img.png"
    },
    Bolsheviknationalism: {
        result: "结果：布尔什维克民族主义",
        image: "Bolsheviknationalism_img.png"
    },
    Stalinism: {
        result: "结果：斯大林主义",
        image: "Stalinism_img.png"
    },
    Maoism: {
        result: "结果：毛泽东思想",
        image: "Maoism_img.png"
    },
    Castroism: {
        result: "结果：卡斯特罗主义",
        image: "Castroism_img.png"
    },
    MonarchoSocialism: {
        result: "结果：君主制社会主义",
        image: "MonarchoSocialism_img.png"
    },
    Mugabeism: {
        result: "结果：穆加贝主义",
        image: "Mugabeism_img.png"
    },
    LeftWingNationalism: {
        result: "结果：左翼民族主义",
        image: "LeftWingNationalism_img.png"
    },
    Jacobinism: {
        result: "结果：雅各宾派",
        image: "Jacobinism_img.png"
    },
    SyndicalistMutualism: {
        result: "结果：工团互助主义",
        image: "SyndicalistMutualism_img.png"
    },
    Mutualism: {
        result: "结果：互助主义",
        image: "Mutualism_img.png"
    },
    AnarchoPrimitivism: {
        result: "结果：无政府原始主义",
        image: "AnarchoPrimitivism_img.png"
    },
    Egoism: {
        result: "结果：自我主义",
        image: "Egoism_img.png"
    },
    AnarchoSyndicalism: {
        result: "结果：无政府工团主义",
        image: "AnarchoSyndicalism_img.png"
    },
    SocialAnarchism: {
        result: "结果：社会无政府主义",
        image: "SocialAnarchism_img.png"
    },
    AnarchoCommunism: {
        result: "结果：无政府共产主义",
        image: "AnarchoCommunism_img.jpeg"
    },
    DemocraticConfederalism: {
        result: "结果：民主邦联主义",
        image: "DemocraticConfederalism_img.png"
    },
    LibertarianMunicipalism: {
        result: "结果：Libertarian Municipalism (自由意志市政主义?)",
        image: "LibertarianMunicipalism_img.png"
    },
    Soulism: {
        result: "结果：灵魂主义",
        image: "Soulism_img.png"
    },
    AnarchoPacifism: {
        result: "结果：无政府和平主义",
        image: "AnarchoPacifism_img.png"
    },
    Communalism: {
        result: "结果：公社主义",
        image: "Communalism_img.png"
    },
    GreenLiberalism: {
        result: "结果：绿色自由主义",
        image: "GreenLiberalism_img.png"
    },
    Georgism: {
        result: "结果：乔治主义",
        image: "Georgism_img.png"
    },
    Progressivism: {
        result: "结果：进步主义",
        image: "Progressivism_img.png"
    },
    SocialDemocracy: {
        result: "结果：社会民主主义",
        image: "SocialDemocracy_img.png"
    },
    NordicModel: {
        result: "结果：北欧模式",
        image: "NordicModel_img.png"
    },
    DemocraticSocialism: {
        result: "结果：民主社会主义",
        image: "DemocraticSocialism_img.png"
    },
    LiberalSocialism: {
        result: "结果：自由社会主义",
        image: "LiberalSocialism_img.png"
    },
    UtopianSocialism: {
        result: "结果：空想社会主义",
        image: "UtopianSocialism_img.png"
    },
    MonarchoSyndicalism: {
        result: "结果：君主制工团主义",
        image: "MonarchoSyndicalism_img.png"
    },
    Syndicalism: {
        result: "结果：工团主义",
        image: "Syndicalism_img.png"
    },
    LibertarianSocialism: {
        result: "结果：自由意志社会主义",
        image: "LibertarianSocialism_img.png"
    },
    MinarchoSocialism: {
        result: "结果：小政府社会主义",
        image: "MinarchoSocialism_img.png"
    },
    ChristianSocialism: {
        result: "结果：基督教社会主义",
        image: "ChristianSocialism_img.png"
    },
    MarketSocialism: {
        result: "结果：市场社会主义",
        image: "MarketSocialism_img.png"
    },
    CouncilCommunism: {
        result: "结果：委员会共产主义",
        image: "CouncilCommunism_img.png"
    },
    AnarchoLiberalism: {
        result: "结果：无政府自由主义",
        image: "AnarchoLiberalism_img.png"
    },
    Avaritionism: {
        result: "结果：自我达尔文主义",
        image: "Avaritionism_img.png"
    },
    AnarchoNihilism: {
        result: "结果：无政府虚无主义",
        image: "AnarchoNihilism_img.png"
    },
    AnarchoCapitalism: {
        result: "结果：无政府资本主义",
        image: "AnarchoCapitalism_img.png"
    },
    PinkCapitalism: {
        result: "结果：粉色资本主义",
        image: "PinkCapitalism_img.png"
    },
    Korwinism: {
        result: "结果：科尔温主义",
        image: "Korwinism_img.png"
    },
    NeoliberalConservatism: {
        result: "结果：新自由保守主义",
        image: "NeoliberalConservatism_img.png"
    },
    NationalLiberalism: {
        result: "结果：民族自由主义",
        image: "NationalLiberalism_img.png"
    },
    Voluntaryism: {
        result: "结果：自愿主义",
        image: "Voluntaryism_img.png"
    },
    Hayekism: {
        result: "结果：哈耶克主义",
        image: "Hayekism_img.png"
    },
    Objectivism: {
        result: "结果：客观主义",
        image: "Objectivism_img.png"
    },
    Minarchism: {
        result: "结果：小政府主义",
        image: "Minarchism_img.png"
    },
    Neoliberalism: {
        result: "结果：新自由主义",
        image: "Neoliberalism_img.png"
    },
    ClassicalLiberalism: {
        result: "结果：古典自由主义",
        image: "ClassicalLiberalism_img.png"
    },
    Paleolibertarianism: {
        result: "结果：旧自由意志主义",
        image: "Paleolibertarianism_img.png"
    },
    LibertarianConservatism: {
        result: "结果：自由意志保守主义",
        image: "LibertarianConservatism_img.png"
    },
    LibertarianTranshumanism: {
        result: "结果：自由意志超人类主义",
        image: "LibertarianTranshumanism_img.png"
    },
    Geolibertarianism: {
        result: "结果：乔治自由意志主义",
        image: "Geolibertarianism_img.png"
    },
    DistributistLibertarianism: {
        result: "结果：分产自由意志主义",
        image: "DistributistLibertarianism_img.png"
    },
    SocialLibertarianism: {
        result: "结果：社会自由意志主义",
        image: "SocialLibertarianism_img.png"
    },
    Hoppeanism: {
        result: "结果：霍普主义",
        image: "Hoppeanism_img.png"
    },
    Libertarianism: {
        result: "结果：自由意志主义",
        image: "Libertarianism_img.png"
    },
    LiberalLibertarianism: {
        result: "结果：Liberal Libertarianism (自由主义自由意志主义?)",
        image: ""
    },
    StateCapitalism: {
        result: "结果：国家资本主义",
        image: "StateCapitalism_img.png"
    },
    SocialismwithChinesecharacteristics: {
        result: "结果：中国特色社会主义",
        image: "SocialismwithChinesecharacteristics_img.png"
    }
};