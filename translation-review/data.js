// 审查内容。追加批次时保留已有 batch.id、section.id、entry.id。
window.REVIEW_BATCHES = [
  {
    "id": "social-democracy-01",
    "archived": true,
    "title": "社会民主主义",
    "date": "2026-10-10",
    "route": [
      "开始测试",
      "民众",
      "更小好",
      "应该",
      "私有（私人所有）",
      "通过政府福利解决住房问题",
      "保障穷人权益",
      "保护劳动者权益",
      "社会民主主义"
    ],
    "sections": [
      {
        "id": "home",
        "title": "首页",
        "entries": [
          {
            "id": "H1",
            "label": "页面标题",
            "zh": "意识形态测试",
            "en": "Where You Stand?",
            "alternatives": [
              {
                "id": "descriptive-title",
                "en": "Political Ideology Quiz",
                "note": "现稿像一个邀请用户思考自身立场的产品名称；这版直接说明测试主题，让初次访问的人更快知道网站用途。两者都适合，区别在命名方式。选定后，测试页和浏览器标签页应使用同一个名称。"
              }
            ],
            "note": "按你的偏好采用 Where You Stand?，作为围绕「你的立场」命名的产品标题。Where You Stand 可以作标题式短语，末尾问号属于命名上的风格选择；如果要写成日常英语中的完整问句，通常仍应使用 Where Do You Stand?。这里按产品名称处理，不再自动补入 Do。",
            "selected": false,
            "priority": true
          },
          {
            "id": "H2",
            "label": "进入测试",
            "zh": "开始测试",
            "en": "Start",
            "note": "按钮所在语境已经交代用途，Start 足够明确。",
            "selected": false,
            "priority": false
          },
          {
            "id": "H3",
            "label": "小游戏入口",
            "zh": "小游戏",
            "en": "Mini Games",
            "note": "直接保留，表达自然，也准确保留「小游戏」的含义。",
            "selected": false,
            "priority": false
          },
          {
            "id": "H4",
            "label": "说明入口",
            "zh": "如何获得准确的结果",
            "en": "How to Get Accurate Results",
            "note": "直译后仍清楚自然，保留；此处是入口名称，不额外增加准确率承诺。",
            "selected": false,
            "priority": false
          },
          {
            "id": "H5",
            "label": "历史入口",
            "zh": "版本历史记录",
            "en": "Version History",
            "note": "常见且准确的界面名称，保留。",
            "selected": false,
            "priority": false
          },
          {
            "id": "H6",
            "label": "反馈入口",
            "zh": "反馈问题",
            "en": "Feedback",
            "alternatives": [
              {
                "id": "action-label",
                "en": "Send Feedback",
                "note": "Feedback 适合作为入口名称；Send Feedback 用动词说明接下来可以做什么，更像一个行动按钮。两者都能涵盖问题和建议，也都适合打开联系说明。这里的 Send 不表示点击后已经发送了信息。"
              }
            ],
            "note": "该入口同时接受问题和建议；比现有英文 Report 更完整地概括用途。",
            "selected": false,
            "priority": false
          },
          {
            "id": "H7",
            "label": "切换语言",
            "zh": "English",
            "en": "中文",
            "note": "中文界面提供去英文版的入口；英文界面应显示目标语言「中文」。这是对应功能，不是把 English 翻译成中文的普通文本。",
            "selected": false,
            "priority": false
          }
        ],
        "notes": [
          {
            "text": "H1 同时建议用于测试页标题与浏览器标签页标题，保持产品名称一致。现有首页中的 Start、Mini Games、How to Get Accurate Results、Version History 均可沿用。",
            "tone": "normal"
          }
        ],
        "sources": [
          "portalscript.js:14"
        ]
      },
      {
        "id": "controls",
        "title": "答题过程的通用文案",
        "entries": [
          {
            "id": "U1",
            "label": "切换题目或显示结果时",
            "zh": "计算中……",
            "en": "Loading…",
            "note": "当前实现是在短暂进度动画后显示下一题或结果；没有计算分数。按实际行为写 Loading，不制造正在分析答案的印象。",
            "selected": false,
            "priority": false
          },
          {
            "id": "U2",
            "label": "返回上一题",
            "zh": "后退",
            "en": "Back",
            "note": "直接使用常见操作名称。",
            "selected": false,
            "priority": false
          },
          {
            "id": "U3",
            "label": "从头再做",
            "zh": "再来一次",
            "en": "Retake quiz",
            "alternatives": [
              {
                "id": "conversational-repeat",
                "en": "Take the quiz again",
                "note": "Retake quiz 是简洁的功能标签；这版更像直接对用户发出邀请，语气更口语化。两者都明确表示重新答题，不暗示上一次测试失败。按钮空间允许时，可按产品语气选择。"
              }
            ],
            "note": "明确说明会重新做测试；比 Try again 更适合已正常完成测试的场景。",
            "selected": false,
            "priority": false
          }
        ],
        "notes": [],
        "sources": [
          "test.html:87",
          "script.js:120"
        ]
      },
      {
        "id": "q1",
        "title": "第 1 题：谁来管理",
        "entries": [
          {
            "id": "Q1",
            "label": "题目",
            "zh": "国家应更多由政府管理还是民众管理？",
            "en": "Who should have a greater role in running a country: the government or the people?",
            "note": "",
            "selected": false,
            "priority": false
          },
          {
            "id": "Q1.1",
            "label": "选项 1",
            "zh": "政府",
            "en": "The government",
            "note": "",
            "selected": false,
            "priority": false
          },
          {
            "id": "Q1.2",
            "label": "选项 2",
            "zh": "民众",
            "en": "The people",
            "note": "",
            "selected": true,
            "priority": false
          }
        ],
        "notes": [
          {
            "text": "处理判断： 用 have a greater role in running 表达「更多由……管理」，保留比较关系。这里的「民众」使用 the people；没有补入原文未指定的直接民主、全民公投或其他制度安排。",
            "tone": "normal"
          }
        ],
        "sources": [
          "logical.js:2"
        ]
      },
      {
        "id": "q2",
        "title": "第 2 题：贫富差距",
        "entries": [
          {
            "id": "Q2",
            "label": "题目",
            "zh": "民众的贫富差距总体来讲应该？",
            "en": "In general, is a wider or narrower gap between rich and poor better?",
            "note": "",
            "selected": false,
            "priority": false
          },
          {
            "id": "Q2.1",
            "label": "选项 1",
            "zh": "更大好",
            "en": "A wider gap",
            "note": "",
            "selected": false,
            "priority": false
          },
          {
            "id": "Q2.2",
            "label": "选项 2",
            "zh": "更小好",
            "en": "A narrower gap",
            "note": "",
            "selected": true,
            "priority": false
          }
        ],
        "notes": [
          {
            "text": "处理判断： 中文题干与选项共同组成意思，英文也作为一个整体来写。题干中的 better 承担选项里「好」的判断，因此按钮无需重复 is better。保留「差距更大比较好」这一原始立场，没有把它改成「容忍差距」或「更重视经济自由」。",
            "tone": "normal"
          }
        ],
        "sources": [
          "logical.js:13"
        ]
      },
      {
        "id": "q3",
        "title": "第 3 题：国家是否应该存在",
        "entries": [
          {
            "id": "Q3",
            "label": "题目",
            "zh": "国家或类似组织应该存在吗？",
            "en": "Should the state, or a similar governing institution, exist?",
            "note": "",
            "selected": false,
            "priority": true
          },
          {
            "id": "Q3.1",
            "label": "选项 1",
            "zh": "应该",
            "en": "Yes",
            "note": "",
            "selected": true,
            "priority": false
          },
          {
            "id": "Q3.2",
            "label": "选项 2",
            "zh": "不应该",
            "en": "No",
            "note": "",
            "selected": false,
            "priority": false
          }
        ],
        "notes": [
          {
            "text": "处理判断： 根据下一步分向有国家与无国家的路线，这里的「国家」暂按政治组织意义的 the state 处理，而非地理意义的 country。「类似组织」写为 a similar governing institution，明确是治理机构，避免读成任何普通组织。Yes / No 则与英文问句自然衔接。",
            "tone": "normal"
          },
          {
            "text": "审查重点： 这是本稿对原意的一项解释。美国读者也可能把 state 理解为「州」；这里用 the state 和 governing institution 提示政治概念。若目标读者完全没有政治基础，后续可另设简短术语提示。若你原意只是「政府是否应该存在」，应先明确这个概念，再决定是否改用 government。",
            "tone": "attention"
          }
        ],
        "sources": [
          "logical.js:239"
        ]
      },
      {
        "id": "q4",
        "title": "第 4 题：生产资料的所有权",
        "entries": [
          {
            "id": "Q4",
            "label": "题目",
            "zh": "生产资料（生产所需的物品）应该？",
            "en": "Should the means of production (the resources used to produce goods) be privately or publicly owned?",
            "note": "",
            "selected": false,
            "priority": false
          },
          {
            "id": "Q4.1",
            "label": "选项 1",
            "zh": "私有（私人所有）",
            "en": "Privately owned",
            "note": "",
            "selected": true,
            "priority": false
          },
          {
            "id": "Q4.2",
            "label": "选项 2",
            "zh": "公有（公共所有）",
            "en": "Publicly owned",
            "note": "",
            "selected": false,
            "priority": false
          },
          {
            "id": "Q4.3",
            "label": "选项 3",
            "zh": "生活资料也要公有",
            "en": "Both the means of production and goods for everyday use should be owned in common",
            "note": "按你的批注回查：这个选项直接给出「公社主义」（Communalism），没有后续问题；另一个「公有」选项则继续询问生产资料的掌控方式。结合这一区别，我更倾向于你当时想表达「共同所有的范围也包括日常生活所用的物品」，例如食物、衣物等，而不是泛指个人名下的一切资产。这些物品可以是个人用品，但「生活资料」与「全部个人财产」不能直接画等号。英文因此用 goods for everyday use 说明用途；both 保留生产资料也在范围内，owned in common 明确表示共同所有，避免把这里的公有读成仅由政府持有。这个推断与 Oxford 对 communalism 的共同生活、共享财物这一词义相容。不过 Communalism 也用于 Bookchin 的政治理论；结果名称本身不足以证明它必然主张把所有个人用品公有化。因此这版是结合原题对当时用意的推测，不是对公社主义的统一定义，也没有据此扩大原题范围。词义与理论参考见下方「路线与来源」。",
            "selected": false,
            "priority": true
          }
        ],
        "notes": [
          {
            "text": "处理判断： means of production 是现成术语，可以直接使用；括号继续承担原文的解释功能。Privately owned / Publicly owned 本身已表达私人或公共所有，无须再用括号重复。公有保留为 publicly owned，没有收窄成 government-owned，因为原题库在后续还区分国家、工人与工会的掌控。",
            "tone": "normal"
          },
          {
            "text": "第三个选项明确写出 both，保留「也」所表达的范围扩张，而不是只谈生活资料。goods for personal use 是对「生活资料」的解释性表达，用来区分个人生活使用与生产使用，没有擅自扩展成所有财产。",
            "tone": "normal"
          },
          {
            "text": "审查重点： 请优先检查 Q4.3 的「生活资料」范围是否符合你的设定。这句有意比中文更长，以免用户漏掉它同时包括生产资料。",
            "tone": "attention"
          }
        ],
        "sources": [
          "logical.js:250"
        ]
      },
      {
        "id": "q5",
        "title": "第 5 题：土地与住房",
        "entries": [
          {
            "id": "Q5",
            "label": "题目",
            "zh": "你对土地与住房政策的看法",
            "en": "Which approach to land and housing policy do you support?",
            "note": "",
            "selected": false,
            "priority": false
          },
          {
            "id": "Q5.1",
            "label": "选项 1",
            "zh": "通过市场和环保政策解决住房问题",
            "en": "Address housing problems through the market and environmental policies",
            "note": "",
            "selected": false,
            "priority": false
          },
          {
            "id": "Q5.2",
            "label": "选项 2",
            "zh": "通过政府福利解决住房问题",
            "en": "Address housing problems through government assistance",
            "note": "",
            "selected": true,
            "priority": false
          },
          {
            "id": "Q5.3",
            "label": "选项 3",
            "zh": "土地不应该属于财产，应该归所有人拥有",
            "en": "Land should belong to everyone rather than be treated as property",
            "note": "",
            "selected": false,
            "priority": false
          }
        ],
        "notes": [
          {
            "text": "处理判断： 题干从中文标题式片语调整为邀请选择政策的完整问句。前两个选项保留平行结构；government assistance 在这个住房语境里表达政府提供的支持，不擅自指定为现金补贴、公共住房或某项美国政策。",
            "tone": "normal"
          },
          {
            "text": "Q5.1 保留市场与环保政策两个要素，没有因为英文里这个组合需要更多解释就删掉环保。Q5.3 保留原文的所有权主张，没有根据其通向的结果名称另写成土地税政策。",
            "tone": "normal"
          }
        ],
        "sources": [
          "logical.js:263"
        ]
      },
      {
        "id": "q6",
        "title": "第 6 题：优先事项",
        "entries": [
          {
            "id": "Q6",
            "label": "题目",
            "zh": "保障穷人权益与环境保护哪个应该优先执行？",
            "en": "Which should take priority: protecting the rights of people in poverty or protecting the environment?",
            "note": "",
            "selected": false,
            "priority": false
          },
          {
            "id": "Q6.1",
            "label": "选项 1",
            "zh": "保障穷人权益",
            "en": "Protecting the rights of people in poverty",
            "note": "",
            "selected": true,
            "priority": false
          },
          {
            "id": "Q6.2",
            "label": "选项 2",
            "zh": "环境保护",
            "en": "Protecting the environment",
            "note": "",
            "selected": false,
            "priority": false
          }
        ],
        "notes": [
          {
            "text": "处理判断： take priority 自然表达「优先执行」。保留 rights，而非改写成「减少贫困」或泛泛的「帮助穷人」。people in poverty 表达贫困处境，没有将范围改成所有低收入人群，也没有添加原文未限定的法律权利。",
            "tone": "normal"
          }
        ],
        "sources": [
          "logical.js:276"
        ]
      },
      {
        "id": "q7",
        "title": "第 7 题：劳动政策",
        "entries": [
          {
            "id": "Q7",
            "label": "题目",
            "zh": "你认为政府在劳动力市场中应该？",
            "en": "What role should the government play in the labor market?",
            "alternatives": [
              {
                "id": "action-question",
                "en": "What should the government do in the labor market?",
                "note": "现稿从政府应扮演的角色发问，适合讨论政策立场；这版从政府应采取的行动发问，更直接地衔接下面以 Protect 开头的答案。两种问法都自然，保留相同的政府、劳动力市场和“应该”判断，没有增加新的立场。"
              }
            ],
            "note": "",
            "selected": false,
            "priority": true
          },
          {
            "id": "Q7.1",
            "label": "选项 1",
            "zh": "保护劳动者权益",
            "en": "Protect workers’ rights",
            "note": "",
            "selected": true,
            "priority": false
          },
          {
            "id": "Q7.2",
            "label": "选项 2",
            "zh": "保护劳动者权益同时给予企业足够的用工灵活性",
            "en": "Protect workers’ rights while giving employers enough flexibility to manage their workforce",
            "note": "",
            "selected": false,
            "priority": false
          }
        ],
        "notes": [
          {
            "text": "处理判断： labor market 和 workers’ rights 都是可直接使用的表达；labor 采用美式拼写。企业在此以雇主身份出现，因此用 employers；manage their workforce 表达用工安排，不额外加入「自由解雇」等更具体的主张。",
            "tone": "normal"
          },
          {
            "text": "原文结构备注： 第一个选项没有明确反对用工灵活性，第二个选项也包含保护劳动者权益。因此两者本来就不是完全互斥的表述。本稿保留这个区别，没有为第一个选项补上 only 或 at all costs。若以后要让两个答案更容易区分，需要作为题目设计单独调整。",
            "tone": "attention"
          }
        ],
        "sources": [
          "logical.js:287"
        ]
      },
      {
        "id": "result",
        "title": "结果页",
        "entries": [
          {
            "id": "R1",
            "label": "结果",
            "zh": "你的意识形态是：社会民主主义",
            "en": "Your result: Social Democracy",
            "note": "",
            "selected": false,
            "priority": false
          }
        ],
        "notes": [
          {
            "text": "处理判断： Social Democracy 直接采用对应名称，不与 Democratic Socialism 混用。Your result 按测试结果页的用途来写，避免把一次答题写成对用户身份的确定判断。也没有加入「最接近」「匹配百分比」或原程序没有提供的分析。",
            "tone": "normal"
          },
          {
            "text": "结果页同时使用 U3「Retake quiz」和 U2「Back」。本轮没有新增意识形态介绍段落，以免把原项目不存在的说明混入翻译对照。",
            "tone": "normal"
          }
        ],
        "sources": [
          "logical.js:1265"
        ]
      },
      {
        "id": "extras",
        "title": "附属文案",
        "entries": [
          {
            "id": "X1",
            "label": "首页反馈弹窗",
            "zh": "任何问题或建议，请发送邮件至notavailable",
            "en": "Found a problem or have a suggestion? Email [contact email].",
            "note": "用自然问句邀请反馈。[contact email] 是审查稿占位符；项目尚未提供可用地址，不能直接作为最终文案发布。",
            "selected": false,
            "priority": false
          },
          {
            "id": "X2",
            "label": "首页版本弹窗前缀",
            "zh": "版本：",
            "en": "Version:",
            "note": "直译即可；后面继续接程序已有的版本号，不更改版本内容。",
            "selected": false,
            "priority": false
          },
          {
            "id": "X3",
            "label": "结果图片替代文本",
            "zh": "原项目无中文；当前英文为 Result Image",
            "en": "Result Image",
            "note": "按你的批注暂缓处理，撤回本轮对图片的具体描述。英文栏仅保留项目当前的 Result Image 作为占位，不是新的替代文本建议，无需现在定稿。等图片的呈现方式确定后，再决定是否需要替代文本及其内容。本条保留在待审查中，方便以后继续处理。",
            "selected": false,
            "priority": false
          }
        ],
        "notes": [
          {
            "text": "这些内容不要求用户在示例路线中触发，但属于同一首页或结果页面。",
            "tone": "normal"
          }
        ],
        "sources": [
          "portalscript.js:22",
          "test.html:82"
        ]
      }
    ],
    "references": [
      {
        "label": "Social Democracy · Merriam-Webster",
        "url": "https://www.merriam-webster.com/dictionary/social%20democracy"
      },
      {
        "label": "Means of production · Dictionary.com",
        "url": "https://www.dictionary.com/browse/means-of-production?q=means+of+production"
      },
      {
        "label": "State · FindLaw / Merriam-Webster",
        "url": "https://dictionary.findlaw.com/definition/state.html"
      },
      {
        "label": "Communalism 的共同生活词义 · Oxford Learner’s Dictionaries",
        "url": "https://www.oxfordlearnersdictionaries.com/us/definition/english/communalism"
      },
      {
        "label": "Communalism 的政治理论用法 · Murray Bookchin · The Communalist Project",
        "url": "https://murraybookchin.org/essays/the-communalist-project/"
      }
    ]
  },
  {
    "id": "fascism-01",
    "archived": true,
    "title": "法西斯主义",
    "date": "2026-10-11",
    "route": [
      "开始测试",
      "政府",
      "更大好",
      "国家",
      "比其它的优越",
      "国家的统一和力量",
      "法西斯主义"
    ],
    "sections": [
      {
        "id": "q1",
        "title": "谁来管理",
        "sources": ["logical.js:2"],
        "notes": [],
        "entries": [
          {
            "id": "Q1",
            "duplicateOf": "social-democracy-01/Q1",
            "label": "题目",
            "zh": "国家应更多由政府管理还是民众管理？",
            "en": "Who should have a greater role in running a country: the government or the people?",
            "note": "沿用已有审查稿的共同题目。have a greater role in running 自然表达「更多由……管理」，保留程度上的比较；不改成政府是否应该存在，也不额外指定选举或直接民主等制度。",
            "selected": false,
            "priority": false
          },
          {
            "id": "Q1.1",
            "duplicateOf": "social-democracy-01/Q1.1",
            "label": "选项 1",
            "zh": "政府",
            "en": "The government",
            "note": "直译自然，与题干中的 the government 一致；不限定为美国联邦政府。",
            "selected": true,
            "priority": false
          },
          {
            "id": "Q1.2",
            "duplicateOf": "social-democracy-01/Q1.2",
            "label": "选项 2",
            "zh": "民众",
            "en": "The people",
            "note": "the people 能自然表达参与国家治理的民众；不收窄为选民或某个社会阶层。",
            "selected": false,
            "priority": false
          }
        ]
      },
      {
        "id": "q2",
        "title": "贫富差距",
        "sources": ["logical.js:480"],
        "notes": [],
        "entries": [
          {
            "id": "Q2",
            "duplicateOf": "social-democracy-01/Q2",
            "label": "题目",
            "zh": "民众的贫富差距总体来讲应该？",
            "en": "In general, is a wider or narrower gap between rich and poor better?",
            "note": "这道题虽然来自另一分支，原文与已有审查稿相同，英文保持一致。补成完整问句，把两个选项共同的「好」放入 better；in general 保留「总体来讲」。",
            "selected": false,
            "priority": false
          },
          {
            "id": "Q2.1",
            "duplicateOf": "social-democracy-01/Q2.1",
            "label": "选项 1",
            "zh": "更大好",
            "en": "A wider gap",
            "note": "wider gap 是自然搭配，结合题干表示「更大的贫富差距更好」。保留这个明确立场，不替换为「接受一定程度的不平等」或「鼓励竞争」。",
            "selected": true,
            "priority": false
          },
          {
            "id": "Q2.2",
            "duplicateOf": "social-democracy-01/Q2.2",
            "label": "选项 2",
            "zh": "更小好",
            "en": "A narrower gap",
            "note": "与 A wider gap 形成平行表达。「更小」保留为比较级，没有改成完全消除差距。",
            "selected": false,
            "priority": false
          }
        ]
      },
      {
        "id": "q3",
        "title": "土地所有权",
        "sources": ["logical.js:712", "logical.js:883"],
        "notes": [],
        "entries": [
          {
            "id": "Q3",
            "label": "题目",
            "zh": "土地所有权多数应该归？",
            "en": "Who should own most of the land?",
            "note": "用 own 直接询问所有权，比逐字拼成「土地所有权应主要属于谁」更自然。most of the land 保留「多数」，没有扩大为全部土地，也没有把所有权改成使用权或管理权。",
            "selected": false,
            "priority": false
          },
          {
            "id": "Q3.1",
            "label": "选项 1",
            "zh": "国家",
            "en": "The state",
            "note": "土地所有权语境中的「国家」指政治实体，用 the state 保留国有的含义。这里不是美国的某个州，也不额外指定由中央还是地方政府持有。",
            "selected": true,
            "priority": false
          },
          {
            "id": "Q3.2",
            "label": "选项 2",
            "zh": "组织 (法团)",
            "en": "Corporatist bodies (groups organized by occupation or industry)",
            "note": "结合后续通向法团主义与整合主义的分支，将「法团」理解为按职业或行业组织起来的团体。英文先保留政治术语，再用括号帮助不熟悉该词的读者理解；单写 corporations 容易被美国读者理解为商业公司。需要确认的是原文是否确实采用这个政治概念：如果你想表达的是一般法人组织，这条解释就需要调整。",
            "selected": false,
            "priority": true
          },
          {
            "id": "Q3.3",
            "label": "选项 3",
            "zh": "个人",
            "en": "Individuals",
            "note": "直译自然，复数表示个人这一类所有者；不改成私人企业或笼统的私营部门。",
            "selected": false,
            "priority": false
          },
          {
            "id": "Q3.4",
            "label": "选项 4",
            "zh": "都可以，无所谓",
            "en": "Any of these is fine",
            "note": "这是美国英语里自然的无偏好回答，同时保留「都可以」。不用 All of the above，以免读成明确主张几种所有权并存；也不用 I don’t know，因为原文并不表示不知道。",
            "selected": false,
            "priority": false
          }
        ]
      },
      {
        "id": "q4",
        "title": "对自身群体的看法",
        "sources": ["logical.js:894"],
        "notes": [],
        "entries": [
          {
            "id": "Q4",
            "label": "题目",
            "zh": "我自己的种族/民族?",
            "en": "How does your own racial or ethnic group compare with others?",
            "note": "中文题干是等着选项补完的片语，英文改为直接向用户提问的完整句子，所以「我自己的」对应 your own。按这里的群体比较语境，将「种族／民族」写成 racial or ethnic group；没有改成国籍、文化或国家实力。如果你这里的「民族」专指政治共同体意义的 nation，需要另行确认。",
            "selected": false,
            "priority": true
          },
          {
            "id": "Q4.1",
            "label": "选项 1",
            "zh": "比其它的优越",
            "en": "Superior to others",
            "note": "superior to 是表达「比……优越」的自然搭配，结合题干清楚表示对自身群体的判断。保留原文的强度，不改成「更喜欢自己的群体」或「为自己的文化自豪」。",
            "selected": true,
            "priority": false
          },
          {
            "id": "Q4.2",
            "label": "选项 2",
            "zh": "和其它的差不多",
            "en": "About the same as others",
            "note": "直译后自然，about 保留「差不多」的程度。没有改成所有群体完全一样，也没有另加平等权利这一原文未提出的主张。",
            "selected": false,
            "priority": false
          }
        ]
      },
      {
        "id": "q5",
        "title": "两项优先事项",
        "sources": ["logical.js:905"],
        "notes": [],
        "entries": [
          {
            "id": "Q5",
            "label": "题目",
            "zh": "对你来讲哪个更重要？",
            "en": "Which matters more to you?",
            "note": "matters more to you 是自然的个人优先级问法，保留「更重要」的比较。语气适合测试界面，不把问题改成只能支持其中一项。",
            "selected": false,
            "priority": false
          },
          {
            "id": "Q5.1",
            "label": "选项 1",
            "zh": "国家的统一和力量",
            "en": "National unity and strength",
            "note": "这组直接对应的英文自然，可以保留，unity 与 strength 分别承载「统一」和「力量」。unity 在这里按国家整体的统一来理解；如果你专指把分裂领土重新统一的行动，需要改用 unification 或 reunification。strength 保留广义力量，不额外限定为军力。",
            "selected": true,
            "priority": true
          },
          {
            "id": "Q5.2",
            "label": "选项 2",
            "zh": "种族的纯净性",
            "en": "Racial purity",
            "note": "这是现成的英文表达，直译即可准确保留原文概念。没有改成文化传承、民族认同或人口同质性等其他主张。",
            "selected": false,
            "priority": false
          }
        ]
      },
      {
        "id": "result",
        "title": "结果页",
        "sources": ["logical.js:1017", "script.js:120"],
        "notes": [],
        "entries": [
          {
            "id": "R1",
            "label": "结果",
            "zh": "你的意识形态是：法西斯主义",
            "en": "Your result: Fascism",
            "note": "Fascism 直接采用对应名称。沿用已有结果文案的 Your result，表达本次测试给出的结果；没有另加匹配百分比、最接近的意识形态或程序未提供的分析。重新答题和返回按钮继续使用已有审查稿的 Retake quiz 与 Back。",
            "selected": false,
            "priority": false
          }
        ]
      },
      {
        "id": "extras",
        "title": "附属文案",
        "sources": ["test.html:82", "logical.js:1019", "Fascism_img.png"],
        "notes": [],
        "entries": [
          {
            "id": "X3",
            "label": "结果图片替代文本",
            "zh": "原项目无中文；当前英文为 Result Image",
            "en": "Result Image",
            "note": "按你的批注暂缓处理，撤回本轮对图片的具体描述。英文栏仅保留项目当前的 Result Image 作为占位，不是新的替代文本建议，无需现在定稿。等图片的呈现方式确定后，再决定是否需要替代文本及其内容。本条保留在待审查中，方便以后继续处理。",
            "selected": false,
            "priority": false
          }
        ]
      }
    ],
    "references": [
      {
        "label": "法团术语 · Still the Century of Corporatism? · Philippe C. Schmitter / Cambridge Core",
        "url": "https://www.cambridge.org/core/journals/review-of-politics/article/abs/still-the-century-of-corporatism/DD5C2B4745211F043A83B2C301E10BDC"
      },
      {
        "label": "Fascism 与 fasces · United States Holocaust Memorial Museum",
        "url": "https://encyclopedia.ushmm.org/content/en/article/fascism-1"
      },
      {
        "label": "Racial purity 用语 · United States Holocaust Memorial Museum",
        "url": "https://encyclopedia.ushmm.org/content/en/article/nazi-racism"
      }
    ]
  },
  {
    "id": "nazism-01",
    "archived": true,
    "title": "纳粹主义",
    "date": "2026-10-13",
    "route": ["开始测试", "政府", "更大好", "国家", "比其它的优越", "种族的纯净性", "纳粹主义"],
    "sections": [
      {
        "id": "result",
        "title": "结果",
        "sources": ["logical.js:1021"],
        "notes": [],
        "entries": [
          {
            "id": "R1",
            "label": "结果",
            "zh": "你的意识形态是：纳粹主义",
            "en": "Your result: Nazism",
            "note": "Nazism 直接对应「纳粹主义」，是适合此处的明确名称。美国大屠杀纪念馆也使用 Nazism；National Socialism 虽指同一思想，但这里没有必要照搬代码名称或另列一个更长的候选。结果句沿用已有的 Your result，表示本次测试给出的分类。",
            "selected": false,
            "priority": false
          }
        ]
      }
    ],
    "references": [
      {
        "label": "Nazism / National Socialism 用语 · United States Holocaust Memorial Museum",
        "url": "https://encyclopedia.ushmm.org/content/en/article/culture-in-the-third-reich-overview"
      }
    ]
  },
  {
    "id": "monarchism-01",
    "archived": true,
    "title": "君主制",
    "date": "2026-10-13",
    "route": ["开始测试", "政府", "更大好", "国家", "和其它的差不多", "有统治力", "是", "君主制"],
    "sections": [
      {
        "id": "same",
        "title": "国家权力",
        "sources": ["logical.js:916"],
        "notes": [],
        "entries": [
          {
            "id": "Q5",
            "label": "题目",
            "zh": "在你看来国家应该？",
            "en": "How much power should the state have?",
            "note": "中文题干要连同选项才能读完整。两个选项比较国家拥有统治权力与对个人拥有绝对控制，因此英文补成「国家应拥有多大权力」的完整问句。state 沿用前面题目中表示国家这一政治组织的用法。",
            "selected": false,
            "priority": false
          },
          {
            "id": "Q5.1",
            "label": "选项 1",
            "zh": "有统治力",
            "en": "The authority to govern",
            "note": "按「拥有统治、治理国家的权力」理解，authority to govern 比直译成 ruling power 更适合作为答题选项。原文没有规定权力的具体边界，因此不补入 limited、democratic 或 strong，也不改写为强调行政效率的 effective government。",
            "selected": true,
            "priority": true
          },
          {
            "id": "Q5.2",
            "label": "选项 2",
            "zh": "对个人有绝对的、百分之百的控制",
            "en": "Absolute control over individuals",
            "note": "absolute 已经表达「绝对、百分之百」，英文不必再叠加 100%。control over individuals 保留控制对象是个人；保留原文的主张强度，不改成仅仅维持秩序或加强管理。",
            "selected": false,
            "priority": false
          }
        ]
      },
      {
        "id": "control",
        "title": "君主统治",
        "sources": ["logical.js:938"],
        "notes": [],
        "entries": [
          {
            "id": "Q6",
            "label": "题目",
            "zh": "我们是否需要一个君主来统治国家？",
            "en": "Do we need a monarch to rule the country?",
            "note": "这句直接译成英文就自然，保留。monarch 涵盖国王、女王等君主，rule 对应「统治」，保留实际统治这一含义。",
            "selected": false,
            "priority": false
          },
          {
            "id": "Q6.1",
            "label": "选项 1",
            "zh": "是",
            "en": "Yes",
            "note": "与 Do we need… 的问法直接衔接，Yes 足够明确，无需重复整句。",
            "selected": true,
            "priority": false
          },
          {
            "id": "Q6.2",
            "label": "选项 2",
            "zh": "否/无所谓",
            "en": "No / No preference",
            "note": "保留同一个按钮中「不需要」和「有无君主都无所谓」两种立场。No preference 是自然的选项用语，比 I don’t care 语气平实；不改成 Not sure，因为无所谓并不等于不确定，也不拆成会改变原分支的两个选项。",
            "selected": false,
            "priority": false
          }
        ]
      },
      {
        "id": "result",
        "title": "结果",
        "sources": ["logical.js:1025"],
        "notes": [],
        "entries": [
          {
            "id": "R1",
            "label": "结果",
            "zh": "你的意识形态是：君主制",
            "en": "Your result: Monarchism",
            "alternatives": [
              {
                "id": "system-name",
                "en": "Your result: Monarchy",
                "note": "Monarchy 直接对应「君主制」这一制度名称，适合希望沿用中文命名角度的版本；Monarchism 更突出支持君主统治的政治立场，适合意识形态分类。两者在这里都能使用，区别在结果名称强调制度还是主张。"
              }
            ],
            "note": "此处给用户的是意识形态分类，所以首选 Monarchism，突出支持君主制的立场；Merriam-Webster 的释义也涵盖君主统治的原则及对其支持。Monarchy 作为制度名称也成立，因此保留一个有实际区别的候选。原文没有限定绝对君主制或君主立宪制，两个译名都不自行加上这些限定。",
            "selected": false,
            "priority": true
          }
        ]
      }
    ],
    "references": [
      {
        "label": "Monarchism 释义 · Merriam-Webster",
        "url": "https://www.merriam-webster.com/dictionary/monarchism"
      },
      {
        "label": "Monarchy 释义 · Merriam-Webster",
        "url": "https://www.merriam-webster.com/dictionary/monarchy"
      }
    ]
  },
  {
    "id": "socialism-with-chinese-characteristics-01",
    "archived": true,
    "title": "中国特色社会主义",
    "date": "2026-10-13",
    "route": ["开始测试", "政府", "更大好", "国家", "和其它的差不多", "有统治力", "否/无所谓", "对外开放政策，吸引外资和技术", "中国特色社会主义"],
    "sections": [
      {
        "id": "foreign-policy",
        "title": "对外政策",
        "sources": ["logical.js:949"],
        "notes": [],
        "entries": [
          {
            "id": "Q7",
            "label": "题目",
            "zh": "你对待外国的策略是什么？",
            "en": "What approach to foreign policy do you favor?",
            "note": "结合两个国家层面的选项，把「对待外国的策略」写成自然的 foreign policy 问法，favor 询问用户支持哪种做法。这样避免直译成个人如何对待外国，也没有把问题改成对外国人的态度。",
            "selected": false,
            "priority": false
          },
          {
            "id": "Q7.1",
            "label": "选项 1",
            "zh": "对外开放政策，吸引外资和技术",
            "en": "Open up to the world to attract foreign investment and technology",
            "note": "用动词短语表达政策选择，读起来比照搬中文名词串自然。foreign investment 是「外资」的常见对应词；to attract 保留吸引资金和技术的目的。这里的开放指对外往来，不额外补入原文没有的政治制度或移民政策。",
            "selected": true,
            "priority": false
          },
          {
            "id": "Q7.2",
            "label": "选项 2",
            "zh": "对外扩展影响力，控制或剥削他国资源",
            "en": "Expand the country’s influence abroad and control or exploit other countries’ resources",
            "note": "这部分直接对应的表达自然，保留 influence abroad、control or exploit 和 resources。and 连接扩大影响力与控制或剥削资源两部分；or 保留「控制或剥削」的选择关系，没有改成必须两者同时发生，也不另加军事入侵等原文未规定的手段。",
            "selected": false,
            "priority": false
          }
        ]
      },
      {
        "id": "result",
        "title": "结果",
        "sources": ["logical.js:1409"],
        "notes": [],
        "entries": [
          {
            "id": "R1",
            "label": "结果",
            "zh": "你的意识形态是：中国特色社会主义",
            "en": "Your result: Socialism with Chinese Characteristics",
            "note": "Socialism with Chinese Characteristics 是现成的完整英文名称，全国人大公布的宪法英译也使用这一表述，适合直接保留。此处作为结果名称沿用已有页面的标题大小写；不为缩短界面而改成范围更泛的 Chinese Socialism，也不另换成其他意识形态标签。",
            "selected": false,
            "priority": false
          }
        ]
      }
    ],
    "references": [
      {
        "label": "Socialism with Chinese Characteristics 用语 · 全国人大《中华人民共和国宪法》英译",
        "url": "https://en.npc.gov.cn.cdurl.cn/2018-03/11/c_1020529.htm"
      }
    ]
  },
  {
    "id": "imperialism-01",
    "archived": true,
    "title": "帝国主义",
    "date": "2026-10-13",
    "route": ["开始测试", "政府", "更大好", "国家", "和其它的差不多", "有统治力", "否/无所谓", "对外扩展影响力，控制或剥削他国资源", "帝国主义"],
    "sections": [
      {
        "id": "result",
        "title": "结果",
        "sources": ["logical.js:1029"],
        "notes": [],
        "entries": [
          {
            "id": "R1",
            "label": "结果",
            "zh": "你的意识形态是：帝国主义",
            "en": "Your result: Imperialism",
            "note": "Imperialism 是「帝国主义」的准确、现成对应词，直译即可。Merriam-Webster 的释义涵盖一国向外扩张权力及直接或间接控制其他地区，适合保留这一名称；不改成含义不同的 Empire 或更具体的 Colonialism。结果句式与其他结果一致。",
            "selected": false,
            "priority": false
          }
        ]
      }
    ],
    "references": [
      {
        "label": "Imperialism 释义 · Merriam-Webster",
        "url": "https://www.merriam-webster.com/dictionary/imperialism"
      }
    ]
  },
  {
    "id": "kraterocracy-01",
    "archived": true,
    "copyRefs": {
      "initial": {
        "question": "social-democracy-01/Q1",
        "options": {
          "1": "social-democracy-01/Q1.1",
          "2": "social-democracy-01/Q1.2"
        }
      },
      "government": {
        "question": "social-democracy-01/Q2",
        "options": {
          "1": "social-democracy-01/Q2.1",
          "2": "social-democracy-01/Q2.2"
        }
      },
      "economic": {
        "question": "fascism-01/Q3",
        "options": {
          "1": "fascism-01/Q3.1",
          "2": "fascism-01/Q3.2",
          "3": "fascism-01/Q3.3",
          "4": "fascism-01/Q3.4"
        }
      },
      "state": {
        "question": "fascism-01/Q4",
        "options": {
          "1": "fascism-01/Q4.1",
          "2": "fascism-01/Q4.2"
        }
      },
      "same": {
        "question": "monarchism-01/Q5",
        "options": {
          "1": "monarchism-01/Q5.1",
          "2": "monarchism-01/Q5.2"
        }
      },
      "abscontrol": {
        "question": "kraterocracy-01/Q6",
        "options": {
          "1": "monarchism-01/Q6.1",
          "2": "monarchism-01/Q6.2"
        }
      }
    },
    "title": "Kraterocracy",
    "date": "2026-10-13",
    "route": ["开始测试", "政府", "更大好", "国家", "和其它的差不多", "对个人有绝对的、百分之百的控制", "是", "Kraterocracy (独裁主义?)"],
    "sections": [
      {
        "id": "abscontrol",
        "title": "领导人崇拜",
        "sources": ["logical.js:927"],
        "notes": [],
        "entries": [
          {
            "id": "Q6",
            "label": "题目",
            "zh": "我们是否需要把领导人当作神来崇拜？",
            "en": "Do we need to worship our leader as a god?",
            "note": "这句直接译成英文就自然，保留 Do we need to… 所问的必要性。worship…as a god 准确表达「当作神来崇拜」；用 a god 表示神一般的地位，不限定为某一宗教中的 God，也不弱化成尊敬或支持领导人。our leader 与原文「我们」的共同体视角衔接，没有将领导人改称 dictator。两个选项沿用已有的 Yes 和 No / No preference；后者继续把「否」和「无所谓」放在同一个按钮中。",
            "selected": false,
            "priority": false
          }
        ]
      },
      {
        "id": "result",
        "title": "结果",
        "sources": ["logical.js:1037"],
        "notes": [],
        "entries": [
          {
            "id": "R1",
            "label": "结果",
            "zh": "你的意识形态是：Kraterocracy (独裁主义?)",
            "en": "Your result: Kraterocracy",
            "note": "Kraterocracy 本身已经是英文名称，保留项目原有拼写。原文的「(独裁主义?)」带问号，尚不是确定的中文释义，因此不把它当作已确认的同义词写成 Dictatorship。这里提出一项需要你审查的编辑建议：英文结果只显示名称，把未定的括注留在左侧原文和本条说明中。若这个问号是你有意让用户看到的内容，应保留为 (dictatorship?)。结果句沿用已有的 Your result，题目和通往此结果的分支不变。",
            "selected": false,
            "priority": true
          }
        ]
      }
    ],
    "references": [
      {
        "label": "Dictatorship 释义 · Merriam-Webster（用于核对原文的未定括注）",
        "url": "https://www.merriam-webster.com/dictionary/dictatorship"
      }
    ]
  },
  {
    "id": "ingsoc-01",
    "archived": true,
    "copyRefs": {
      "initial": {
        "question": "social-democracy-01/Q1",
        "options": {
          "1": "social-democracy-01/Q1.1",
          "2": "social-democracy-01/Q1.2"
        }
      },
      "government": {
        "question": "social-democracy-01/Q2",
        "options": {
          "1": "social-democracy-01/Q2.1",
          "2": "social-democracy-01/Q2.2"
        }
      },
      "economic": {
        "question": "fascism-01/Q3",
        "options": {
          "1": "fascism-01/Q3.1",
          "2": "fascism-01/Q3.2",
          "3": "fascism-01/Q3.3",
          "4": "fascism-01/Q3.4"
        }
      },
      "state": {
        "question": "fascism-01/Q4",
        "options": {
          "1": "fascism-01/Q4.1",
          "2": "fascism-01/Q4.2"
        }
      },
      "same": {
        "question": "monarchism-01/Q5",
        "options": {
          "1": "monarchism-01/Q5.1",
          "2": "monarchism-01/Q5.2"
        }
      },
      "abscontrol": {
        "question": "kraterocracy-01/Q6",
        "options": {
          "1": "monarchism-01/Q6.1",
          "2": "monarchism-01/Q6.2"
        }
      }
    },
    "title": "英社主义",
    "date": "2026-10-13",
    "route": ["开始测试", "政府", "更大好", "国家", "和其它的差不多", "对个人有绝对的、百分之百的控制", "否/无所谓", "英社主义"],
    "sections": [
      {
        "id": "result",
        "title": "结果",
        "sources": ["logical.js:1033"],
        "notes": [],
        "entries": [
          {
            "id": "R1",
            "label": "结果",
            "zh": "你的意识形态是：英社主义",
            "en": "Your result: Ingsoc",
            "note": "采用《1984》原文中的 Ingsoc，作为一个完整的专名书写；代码键 IngSoc 的内部大小写不决定界面上的拼写。奥威尔在附录中把 Ingsoc 展开为 English Socialism，但这里首选专名，保留它指向小说中这一特定思想的含义。结果句与其他结果一致；关于名称出处的解释放在审查说明中，不擅自为正式结果页增加介绍段落。此路线的题目与选项均已收录，沿用同一审查项。",
            "selected": false,
            "priority": false
          }
        ]
      }
    ],
    "references": [
      {
        "label": "Ingsoc / English Socialism 原文 · George Orwell · The Principles of Newspeak",
        "url": "https://orwell.ru/library/novels/1984/english/en_app"
      }
    ]
  },
  {
    "id": "integralism-01",
    "archived": true,
    "copyRefs": {
      "initial": {
        "question": "social-democracy-01/Q1",
        "options": {
          "1": "social-democracy-01/Q1.1",
          "2": "social-democracy-01/Q1.2"
        }
      },
      "government": {
        "question": "social-democracy-01/Q2",
        "options": {
          "1": "social-democracy-01/Q2.1",
          "2": "social-democracy-01/Q2.2"
        }
      },
      "economic": {
        "question": "fascism-01/Q3",
        "options": {
          "1": "fascism-01/Q3.1",
          "2": "fascism-01/Q3.2",
          "3": "fascism-01/Q3.3",
          "4": "fascism-01/Q3.4"
        }
      },
      "organization": {
        "question": "integralism-01/Q4",
        "options": {
          "1": "monarchism-01/Q6.1",
          "2": "integralism-01/Q4.2"
        }
      }
    },
    "title": "整合主义",
    "date": "2026-10-13",
    "route": ["开始测试", "政府", "更大好", "组织 (法团)", "是", "整合主义"],
    "sections": [
      {
        "id": "organization",
        "title": "天主教与社会",
        "sources": ["logical.js:883"],
        "notes": [],
        "entries": [
          {
            "id": "Q4",
            "label": "题目",
            "zh": "我们是否应该建立一个以过去的天主教为基础的社会？",
            "en": "Should we build a society based on traditional Catholicism?",
            "alternatives": [
              {
                "id": "historical-form",
                "en": "Should we build a society based on Catholicism as it was practiced in the past?",
                "note": "这版更明确地保留「过去」这一时间指向，适合你强调历史上的天主教形态时使用；句子较长，但仍是自然的英语。首选的 traditional Catholicism 读起来更顺，也更像政治观念测试的题干，不过它是在把「过去」理解为「传统形态」，两者的选择取决于你对原文的设定。"
              }
            ],
            "note": "build a society based on… 直接对应「建立一个以……为基础的社会」，英文自然，可以保留。Catholicism 是「天主教」的准确名称。需要审查的是「过去的」：首选暂按传统形态理解为 traditional Catholicism，让美国读者能顺畅读完整句；如果你指的是某个历史阶段的实践，另一候选更忠实于时间指向。原文没有说明时期，本稿不补入中世纪、梵二前或某项教义，也不根据结果名称重写成宗教必须支配政府的新问题。Yes 沿用已有记录，本轮只补上尚未单独收录的 No。",
            "selected": false,
            "priority": true
          },
          {
            "id": "Q4.2",
            "label": "选项 2",
            "zh": "否",
            "en": "No",
            "note": "对 Should we… 的自然否定回答，直译即可。这里的「否」只表示反对题干提出的社会安排；没有「无所谓」的含义，因此不与已有的 No / No preference 合并，也不补写成反对天主教本身。",
            "selected": false,
            "priority": false
          }
        ]
      },
      {
        "id": "result",
        "title": "结果",
        "sources": ["logical.js:993"],
        "notes": [],
        "entries": [
          {
            "id": "R1",
            "label": "结果",
            "zh": "你的意识形态是：整合主义",
            "en": "Your result: Integralism",
            "alternatives": [
              {
                "id": "explicit-catholic-name",
                "en": "Your result: Catholic Integralism",
                "note": "根据上一题的天主教语境补明 Catholic，让不熟悉术语的读者在结果名称中就能看出宗教背景。Integralism 保留原项目较简洁的名称；Catholic Integralism 强调此处所指的具体传统。这是基于路线语境的命名建议，需与你的分类设定一致。"
              }
            ],
            "note": "Integralism 是现成的政治思想名称，适合直接保留。从上一题的天主教语境推断，此处指 Catholic integralism；The Josias 也以 Catholic Integralism 称呼这一思想传统。因此另列一个明确宗教背景的候选，供你选择命名精度，而不是换成意思不清楚的 Integrationism。两个候选都沿用 Your result，均未改变原有分类或分支。",
            "selected": false,
            "priority": false
          }
        ]
      }
    ],
    "references": [
      {
        "label": "Catholic Integralism 用语 · The Josias · Integralism in Three Sentences",
        "url": "https://thejosias.com/2016/10/17/integralism-in-three-sentences/"
      }
    ]
  },
  {
    "id": "corporatism-01",
    "archived": true,
    "copyRefs": {
      "initial": {
        "question": "social-democracy-01/Q1",
        "options": {
          "1": "social-democracy-01/Q1.1",
          "2": "social-democracy-01/Q1.2"
        }
      },
      "government": {
        "question": "social-democracy-01/Q2",
        "options": {
          "1": "social-democracy-01/Q2.1",
          "2": "social-democracy-01/Q2.2"
        }
      },
      "economic": {
        "question": "fascism-01/Q3",
        "options": {
          "1": "fascism-01/Q3.1",
          "2": "fascism-01/Q3.2",
          "3": "fascism-01/Q3.3",
          "4": "fascism-01/Q3.4"
        }
      },
      "organization": {
        "question": "integralism-01/Q4",
        "options": {
          "1": "monarchism-01/Q6.1",
          "2": "integralism-01/Q4.2"
        }
      }
    },
    "title": "法团主义",
    "date": "2026-10-13",
    "route": ["开始测试", "政府", "更大好", "组织 (法团)", "否", "法团主义"],
    "sections": [
      {
        "id": "result",
        "title": "结果",
        "sources": ["logical.js:997"],
        "notes": [],
        "entries": [
          {
            "id": "R1",
            "label": "结果",
            "zh": "你的意识形态是：法团主义",
            "en": "Your result: Corporatism",
            "note": "Corporatism 是「法团主义」的现成对应词，直译自然，直接保留。Merriam-Webster 的释义涉及作为政治代表机构的行业与职业团体，与前面「组织 (法团)」的用词衔接；不用 Corporate Rule，以免读成普通商业公司统治国家这一不同主张。结果句式保持一致。此路线与整合主义共享的题目、Yes 和 No 均只保留一份审查记录。",
            "selected": false,
            "priority": false
          }
        ]
      }
    ],
    "references": [
      {
        "label": "Corporatism 释义 · Merriam-Webster",
        "url": "https://www.merriam-webster.com/dictionary/corporatism"
      },
      {
        "label": "法团术语 · Philippe C. Schmitter · Still the Century of Corporatism?",
        "url": "https://www.cambridge.org/core/journals/review-of-politics/article/abs/still-the-century-of-corporatism/DD5C2B4745211F043A83B2C301E10BDC"
      }
    ]
  },
  {
    "id": "globalization-support-01",
    "archived": true,
    "title": "全球化支持分支",
    "date": "2026-10-13",
    "route": [
      "开始测试",
      "政府",
      "更大好",
      "个人",
      "支持"
    ],
    "scope": {
      "question": "individual",
      "option": "1",
      "includeEntryQuestion": true
    },
    "copyRefs": {
      "individual": {
        "question": "globalization-support-01/Q1",
        "options": {
          "1": "globalization-support-01/Q1.1",
          "2": "globalization-support-01/Q1.2",
          "3": "globalization-support-01/Q1.3"
        }
      },
      "agreeglob": {
        "question": "globalization-support-01/Q2",
        "options": {
          "1": "globalization-support-01/Q2.1",
          "2": "globalization-support-01/Q2.2"
        }
      },
      "notneed": {
        "question": "globalization-support-01/Q3",
        "options": {
          "1": "globalization-support-01/Q3.1",
          "2": "globalization-support-01/Q3.2"
        }
      },
      "env": {
        "question": "globalization-support-01/Q4",
        "options": {
          "1": "monarchism-01/Q6.1",
          "2": "integralism-01/Q4.2"
        }
      },
      "nochrist": {
        "question": "globalization-support-01/Q5",
        "options": {
          "1": "globalization-support-01/Q5.1",
          "2": "globalization-support-01/Q5.2"
        }
      },
      "eco": {
        "question": "globalization-support-01/Q6",
        "options": {
          "1": "globalization-support-01/Q6.1",
          "2": "globalization-support-01/Q6.2"
        }
      },
      "redu": {
        "question": "globalization-support-01/Q7",
        "options": {
          "1": "globalization-support-01/Q7.1",
          "2": "globalization-support-01/Q7.2"
        }
      },
      "anticommu": {
        "question": "globalization-support-01/Q8",
        "options": {
          "1": "globalization-support-01/Q8.1",
          "2": "globalization-support-01/Q8.2"
        }
      },
      "minredu": {
        "question": "globalization-support-01/Q9",
        "options": {
          "1": "monarchism-01/Q6.1",
          "2": "integralism-01/Q4.2"
        }
      }
    },
    "resultRefs": {
      "ConstitutionalMonarchism": "globalization-support-01/R1",
      "ChristianDemocracy": "globalization-support-01/R2",
      "Liberalism": "globalization-support-01/R3",
      "OrdoLiberalism": "globalization-support-01/R4",
      "Neoconservatism": "globalization-support-01/R5",
      "Reaganism": "globalization-support-01/R6",
      "LiberalConservatism": "globalization-support-01/R7",
      "StateLiberalism": "globalization-support-01/R8",
      "EconomicLiberalism": "globalization-support-01/R9"
    },
    "sections": [
      {
        "id": "individual",
        "title": "对全球化的态度？",
        "sources": [
          "logical.js:727"
        ],
        "notes": [],
        "entries": [
          {
            "id": "Q1",
            "label": "题目",
            "zh": "对全球化的态度？",
            "en": "What’s your view on globalization?",
            "note": "中文是标题式片语，英文改成直接邀请用户表达立场的完整问句。globalization 是自然的对应词，保留；原题没有限定经济全球化，因此不加 economic。这里一并提交入口题的三个选项，以便审查问答是否衔接，但本轮只继续展开「支持」之后的分支。",
            "selected": false,
            "priority": false
          },
          {
            "id": "Q1.1",
            "label": "选项 1",
            "zh": "支持",
            "en": "I support it",
            "note": "题干已经说清 globalization，it 的指向明确。I support it 是美国读者熟悉的立场选项，保留「支持」的肯定态度，不加强成强烈支持。",
            "selected": false,
            "priority": false
          },
          {
            "id": "Q1.2",
            "label": "选项 2",
            "zh": "反对",
            "en": "I oppose it",
            "note": "与 I support it 保持平行，oppose 准确表达反对，不改成仅仅担忧或存疑。此处只审查入口按钮，不展开反对全球化的后续路线。",
            "selected": false,
            "priority": false
          },
          {
            "id": "Q1.3",
            "label": "选项 3",
            "zh": "都可以，无所谓",
            "en": "No preference",
            "note": "这里表示对支持或反对全球化没有偏好。No preference 是自然、平实的界面选项；不将「无所谓」改成不确定。此前相同中文用于土地归属的多种方案，采用的是 Any of these is fine；本题的立场语境不同，因此单独保留这一条。",
            "selected": false,
            "priority": false
          }
        ]
      },
      {
        "id": "agreeglob",
        "title": "关于君主我们？",
        "sources": [
          "logical.js:784"
        ],
        "notes": [],
        "entries": [
          {
            "id": "Q2",
            "label": "题目",
            "zh": "关于君主我们？",
            "en": "Should the country have a monarch?",
            "note": "把「关于君主我们？」写成可以直接作答的完整问句。原题和两个选项讨论的是国家要不要君主，英文明确这一点。monarch 涵盖国王、女王等君主；不自行限定性别、世袭方式或君主实际拥有的具体职权。",
            "selected": false,
            "priority": false
          },
          {
            "id": "Q2.1",
            "label": "选项 1",
            "zh": "需要一个被限制权利的君主",
            "en": "Yes, with limited powers",
            "note": "以 Yes 回答题干，再补上原文最关键的限制。此处的「权利」按君主的统治权限理解，英语用 powers；limited 保留受限制的程度，不改成只具有象征作用，也不提前补入原选项没有明说的宪法机制。",
            "selected": false,
            "priority": false
          },
          {
            "id": "Q2.2",
            "label": "选项 2",
            "zh": "国家内不应该有君主",
            "en": "No monarch",
            "note": "题干已说明是国家是否应有君主，No monarch 作为选项清楚自然，完整保留「国家内不应该有君主」的立场。这里没有无所谓的含义，不沿用之前将 No 和 No preference 合在一起的按钮。",
            "selected": false,
            "priority": false
          }
        ]
      },
      {
        "id": "ConstitutionalMonarchism",
        "title": "结果",
        "sources": [
          "logical.js:1069"
        ],
        "notes": [],
        "entries": [
          {
            "id": "R1",
            "label": "结果",
            "zh": "你的意识形态是：君主立宪制",
            "en": "Your result: Constitutional Monarchy",
            "note": "Constitutional Monarchy 是「君主立宪制」的现成制度名称，英国王室官网也使用 constitutional monarchy，直接保留即可。此处提供的是结果标签，沿用已通过的 Your result 句式。也保留 Constitutional Monarchism 这一强调政治主张的候选，供你选择整套结果的命名角度；两个候选均不把受限君主额外定义为完全没有实权。",
            "selected": false,
            "priority": false,
            "alternatives": [
              {
                "id": "political-stance",
                "en": "Your result: Constitutional Monarchism",
                "note": "这版突出支持君主立宪制的政治立场，与此前已通过的 Monarchism 在命名方式上保持一致；Constitutional Monarchy 则沿用更常见的制度名称，也更直接对应中文。取舍在于结果标签强调主张还是制度，分类与分支不变。"
              }
            ]
          }
        ]
      },
      {
        "id": "notneed",
        "title": "环境和经济哪个更重要？",
        "sources": [
          "logical.js:795"
        ],
        "notes": [],
        "entries": [
          {
            "id": "Q3",
            "label": "题目",
            "zh": "环境和经济哪个更重要？",
            "en": "Which should take priority: environmental protection or economic development?",
            "note": "两个选项比较的是政策优先级，因此用 take priority 提问，比笼统地问环境和经济本身哪个重要更贴合原题。environmental protection 和 economic development 直接对应两个选项，不把选择变成只能保护环境或只能发展经济。",
            "selected": false,
            "priority": false
          },
          {
            "id": "Q3.1",
            "label": "选项 1",
            "zh": "环境保护优先",
            "en": "Prioritize environmental protection",
            "note": "自然的政策选择表达，直接保留「环境保护优先」。这是优先顺序，不表示完全停止经济发展；与另一选项使用相同句式。",
            "selected": false,
            "priority": false
          },
          {
            "id": "Q3.2",
            "label": "选项 2",
            "zh": "经济发展优先",
            "en": "Prioritize economic development",
            "note": "economic development 是「经济发展」的自然对应词。保留发展这一范围，不缩窄成某个单独的经济指标；Prioritize 明确保留优先级。",
            "selected": false,
            "priority": false
          }
        ]
      },
      {
        "id": "env",
        "title": "国家是否应该建立在基督教的价值观下？",
        "sources": [
          "logical.js:850"
        ],
        "notes": [],
        "entries": [
          {
            "id": "Q4",
            "label": "题目",
            "zh": "国家是否应该建立在基督教的价值观下？",
            "en": "Should the country be based on Christian values?",
            "note": "based on Christian values 是「建立在基督教的价值观下」的自然英语表达，直接保留这一核心措辞。询问的是国家的价值基础，不自行改写成设立国教、由教会执政或只允许基督徒生活。Yes 和 No 均沿用已通过的独立选项，不再重复提交。",
            "selected": false,
            "priority": false
          }
        ]
      },
      {
        "id": "ChristianDemocracy",
        "title": "结果",
        "sources": [
          "logical.js:1073"
        ],
        "notes": [],
        "entries": [
          {
            "id": "R2",
            "label": "结果",
            "zh": "你的意识形态是：基督教民主主义",
            "en": "Your result: Christian Democracy",
            "note": "Christian Democracy 是「基督教民主主义」的现成英文名称，直接保留。Christian 修饰的是这一政治传统，不改写成只面向基督徒的民主制度；结果句沿用 Your result。",
            "selected": false,
            "priority": false
          }
        ]
      },
      {
        "id": "nochrist",
        "title": "对于自由市场我们应该？",
        "sources": [
          "logical.js:861"
        ],
        "notes": [],
        "entries": [
          {
            "id": "Q5",
            "label": "题目",
            "zh": "对于自由市场我们应该？",
            "en": "How should we approach the free market?",
            "note": "中文的「对于……我们应该？」改成完整的 approach 问句，适合让用户选择做法。the free market 是自然的直接对应词，保留。问法容纳下面「接受」与「积极维护」两种态度，不把本题重写成是否反对自由市场。",
            "selected": false,
            "priority": false
          },
          {
            "id": "Q5.1",
            "label": "选项 1",
            "zh": "接受",
            "en": "Accept it",
            "note": "it 紧接题干中的 the free market，指向明确。accept 直接表达接受；没有另外补上支持政府完全不干预等政策。",
            "selected": false,
            "priority": false
          },
          {
            "id": "Q5.2",
            "label": "选项 2",
            "zh": "积极地维护",
            "en": "Actively protect it",
            "note": "用 actively protect 表达主动维护自由市场，保留与单纯接受的区别。没有擅自把维护手段限定为反垄断、监管、补贴或其他政策。",
            "selected": false,
            "priority": false
          }
        ]
      },
      {
        "id": "Liberalism",
        "title": "结果",
        "sources": [
          "logical.js:1077"
        ],
        "notes": [],
        "entries": [
          {
            "id": "R3",
            "label": "结果",
            "zh": "你的意识形态是：自由主义",
            "en": "Your result: Liberalism",
            "note": "Liberalism 是「自由主义」的现成名称，直接保留。这里保留项目使用的广义政治思想标签，不替换成某个美国政党名称，也不擅自加上 Classical 或其他原文没有的限定。",
            "selected": false,
            "priority": false
          }
        ]
      },
      {
        "id": "OrdoLiberalism",
        "title": "结果",
        "sources": [
          "logical.js:1081"
        ],
        "notes": [],
        "entries": [
          {
            "id": "R4",
            "label": "结果",
            "zh": "你的意识形态是：秩序自由主义",
            "en": "Your result: Ordoliberalism",
            "note": "「秩序自由主义」采用现成术语 Ordoliberalism，写成一个单词。Walter Eucken Institute 的英文资料也采用这一拼写。代码键 OrdoLiberalism 的大小写分段不决定界面名称，不逐字改造为 Order Liberalism；本轮只审查名称，不根据术语定义改写前面的题目或分支。",
            "selected": false,
            "priority": false
          }
        ]
      },
      {
        "id": "eco",
        "title": "政府对经济应该？",
        "sources": [
          "logical.js:806"
        ],
        "notes": [],
        "entries": [
          {
            "id": "Q6",
            "label": "题目",
            "zh": "政府对经济应该？",
            "en": "How much should the government intervene in the economy?",
            "note": "从两个选项判断，本题比较的是经济干预的程度，因此用 How much…intervene 提问。intervene in the economy 是自然的直接对应表达，保留。题干不预先替用户选择减少到什么程度。",
            "selected": false,
            "priority": false
          },
          {
            "id": "Q6.1",
            "label": "选项 1",
            "zh": "减少干预",
            "en": "Reduce government intervention",
            "note": "用自然的动词短语表达「减少干预」。reduce 保留相对减少的含义；这一选项不等于将干预降到最低，与下一项继续保持区别。",
            "selected": false,
            "priority": false
          },
          {
            "id": "Q6.2",
            "label": "选项 2",
            "zh": "对经济的干预尽可能降到最低",
            "en": "Keep government intervention to a minimum",
            "note": "keep…to a minimum 是「尽可能降到最低」的常用表达，保留最低程度这一更强的要求。minimum 不等于绝对为零，因此不改成完全取消政府干预。",
            "selected": false,
            "priority": false
          }
        ]
      },
      {
        "id": "redu",
        "title": "你对共产主义的看法",
        "sources": [
          "logical.js:817"
        ],
        "notes": [],
        "entries": [
          {
            "id": "Q7",
            "label": "题目",
            "zh": "你对共产主义的看法",
            "en": "What do you think of communism?",
            "note": "这个中文题干直接写成 What do you think of… 就是自然的英语问法。保留 communism 这一思想对象，不把范围换成某个特定国家、政党或历史政权。这道题也出现在另一条路线中，后续应继续复用这一题干及共同选项，本轮只展开支持全球化所通往的分支。",
            "selected": false,
            "priority": false
          },
          {
            "id": "Q7.1",
            "label": "选项 1",
            "zh": "应该在世界范围内积极的反共",
            "en": "Actively oppose communism worldwide",
            "note": "用 oppose communism 表达反共，worldwide 和 actively 分别保留世界范围与积极行动两个限定。原选项尚未指定手段，因此这里不提前加上军事干预；手段由下一题再区分。",
            "selected": false,
            "priority": false
          },
          {
            "id": "Q7.2",
            "label": "选项 2",
            "zh": "这通常是不好的",
            "en": "It’s generally bad",
            "note": "这一句直接译成英文就自然。It’s 指共产主义，generally 保留「通常」这一限定，bad 保留原文笼统的负面评价，不强化成必然造成灾难，也不补入具体反对手段。",
            "selected": false,
            "priority": false
          }
        ]
      },
      {
        "id": "anticommu",
        "title": "在全球范围内的干预政策应该使用？",
        "sources": [
          "logical.js:828"
        ],
        "notes": [],
        "entries": [
          {
            "id": "Q8",
            "label": "题目",
            "zh": "在全球范围内的干预政策应该使用？",
            "en": "How should we intervene around the world?",
            "note": "把「干预政策应该使用？」改成询问如何行动的完整问句；around the world 保留全球范围。紧接上一题的积极反共立场，两个选项继续只比较干预手段，不擅自改成是否干预或是否支持某场具体战争。",
            "selected": false,
            "priority": false
          },
          {
            "id": "Q8.1",
            "label": "选项 1",
            "zh": "直接的军事手段",
            "en": "Direct military action",
            "note": "military action 是军事行动的自然表达，direct 明确保留「直接」这一与下一项不同的限定。原文没有指定入侵、轰炸或占领，不额外加入这些更具体的行为。",
            "selected": false,
            "priority": false
          },
          {
            "id": "Q8.2",
            "label": "选项 2",
            "zh": "外交手段/间接的军事手段",
            "en": "Diplomacy or indirect military action",
            "note": "Diplomacy 是「外交手段」的自然表达；indirect military action 保留间接军事手段。用 or 连接原文同一个按钮中的两类手段，不规定必须同时采用，也不把间接手段缩窄成某一种具体做法。",
            "selected": false,
            "priority": false
          }
        ]
      },
      {
        "id": "Neoconservatism",
        "title": "结果",
        "sources": [
          "logical.js:1097"
        ],
        "notes": [],
        "entries": [
          {
            "id": "R5",
            "label": "结果",
            "zh": "你的意识形态是：新保守主义",
            "en": "Your result: Neoconservatism",
            "note": "Neoconservatism 是「新保守主义」的现成名称，作为一个单词书写，直接保留。结果仍是政治思想标签，不换成军事手段的描述，也不把某项单独政策当作全部结果。",
            "selected": false,
            "priority": false
          }
        ]
      },
      {
        "id": "Reaganism",
        "title": "结果",
        "sources": [
          "logical.js:1101"
        ],
        "notes": [],
        "entries": [
          {
            "id": "R6",
            "label": "结果",
            "zh": "你的意识形态是：里根主义",
            "en": "Your result: Reaganism",
            "note": "Reaganism 是「里根主义」的自然名称，里根基金会也使用这一词来讨论里根的政治理念。保留整个政治取向的名称，不改成只指经济政策的 Reaganomics，也不缩窄成某一项外交政策。",
            "selected": false,
            "priority": false
          }
        ]
      },
      {
        "id": "LiberalConservatism",
        "title": "结果",
        "sources": [
          "logical.js:1085"
        ],
        "notes": [],
        "entries": [
          {
            "id": "R7",
            "label": "结果",
            "zh": "你的意识形态是：自由保守主义",
            "en": "Your result: Liberal Conservatism",
            "note": "Liberal Conservatism 直接对应「自由保守主义」，作为思想名称自然，保留。Liberal 修饰 Conservatism；不交换成 Conservative Liberalism，避免改成另一种命名与思想重心。",
            "selected": false,
            "priority": false
          }
        ]
      },
      {
        "id": "minredu",
        "title": "我们是否需要一个世界帝国去传播自由主义？",
        "sources": [
          "logical.js:839"
        ],
        "notes": [],
        "entries": [
          {
            "id": "Q9",
            "label": "题目",
            "zh": "我们是否需要一个世界帝国去传播自由主义？",
            "en": "Do we need a global empire to spread liberalism?",
            "note": "这句直接写成英文仍自然。global empire 保留「世界帝国」的性质与范围，to spread liberalism 保留传播自由主义的目的。没有将帝国弱化成国际合作组织或世界政府，也不把 liberalism 改成 democracy。Yes 和 No 沿用已通过的独立选项。",
            "selected": false,
            "priority": false
          }
        ]
      },
      {
        "id": "StateLiberalism",
        "title": "结果",
        "sources": [
          "logical.js:1089"
        ],
        "notes": [],
        "entries": [
          {
            "id": "R8",
            "label": "结果",
            "zh": "你的意识形态是：国家自由主义",
            "en": "Your result: State Liberalism",
            "note": "沿用项目现有 StateLiberalism 节点及 StateLiberalism_img.png 所对应的分类名称，界面写作 State Liberalism。仅凭「国家自由主义」的中文字面无法替你重新界定这一分类，因此本稿保留项目的名称，不声称它是统一的通行学术分类，也不替换成项目中另有独立节点的 National Liberalism。这里建议重点核对的是分类命名本身；题目和分支保持原设定。",
            "selected": false,
            "priority": true
          }
        ]
      },
      {
        "id": "EconomicLiberalism",
        "title": "结果",
        "sources": [
          "logical.js:1093"
        ],
        "notes": [],
        "entries": [
          {
            "id": "R9",
            "label": "结果",
            "zh": "你的意识形态是：经济自由主义",
            "en": "Your result: Economic Liberalism",
            "note": "Economic Liberalism 是「经济自由主义」的自然对应名称，直接保留。Economic 保留经济领域这一限定，不扩大成所有领域的自由主义，也不改成泛指经济自由的宣传性标签。",
            "selected": false,
            "priority": false
          }
        ]
      }
    ],
    "references": [
      {
        "label": "Constitutional Monarchy 用语 · The Royal Family",
        "url": "https://www.royal.uk/the-role-of-the-monarchy"
      },
      {
        "label": "Ordoliberalism 拼写 · Walter Eucken Institute",
        "url": "https://www.eucken.de/en/institute/history/"
      },
      {
        "label": "Reaganism 用语 · Ronald Reagan Presidential Foundation & Institute",
        "url": "https://www.reaganfoundation.org/media/podcasts/reaganism"
      }
    ]
  },
  {
    "id": "land-individual-indifferent-01",
    "archived": true,
    "title": "土地归个人或无偏好后的全部分支",
    "date": "2026-10-13",
    "route": [
      "土地所有权多数应该归？",
      "个人 / 都可以，无所谓"
    ],
    "scope": {
      "question": "economic",
      "options": [
        "3",
        "4"
      ],
      "includeEntryQuestion": true
    },
    "copyRefs": {
      "economic": {
        "question": "fascism-01/Q3",
        "options": {
          "1": "fascism-01/Q3.1",
          "2": "fascism-01/Q3.2",
          "3": "fascism-01/Q3.3",
          "4": "fascism-01/Q3.4"
        }
      },
      "individual": {
        "question": "globalization-support-01/Q1",
        "options": {
          "1": "globalization-support-01/Q1.1",
          "2": "globalization-support-01/Q1.2",
          "3": "globalization-support-01/Q1.3"
        }
      },
      "agreeglob": {
        "question": "globalization-support-01/Q2",
        "options": {
          "1": "globalization-support-01/Q2.1",
          "2": "globalization-support-01/Q2.2"
        }
      },
      "notneed": {
        "question": "globalization-support-01/Q3",
        "options": {
          "1": "globalization-support-01/Q3.1",
          "2": "globalization-support-01/Q3.2"
        }
      },
      "env": {
        "question": "globalization-support-01/Q4",
        "options": {
          "1": "monarchism-01/Q6.1",
          "2": "integralism-01/Q4.2"
        }
      },
      "nochrist": {
        "question": "globalization-support-01/Q5",
        "options": {
          "1": "globalization-support-01/Q5.1",
          "2": "globalization-support-01/Q5.2"
        }
      },
      "eco": {
        "question": "globalization-support-01/Q6",
        "options": {
          "1": "globalization-support-01/Q6.1",
          "2": "globalization-support-01/Q6.2"
        }
      },
      "redu": {
        "question": "globalization-support-01/Q7",
        "options": {
          "1": "globalization-support-01/Q7.1",
          "2": "globalization-support-01/Q7.2"
        }
      },
      "anticommu": {
        "question": "globalization-support-01/Q8",
        "options": {
          "1": "globalization-support-01/Q8.1",
          "2": "globalization-support-01/Q8.2"
        }
      },
      "minredu": {
        "question": "globalization-support-01/Q9",
        "options": {
          "1": "monarchism-01/Q6.1",
          "2": "integralism-01/Q4.2"
        }
      },
      "disglob": {
        "question": "land-individual-indifferent-01/Q1",
        "options": {
          "1": "land-individual-indifferent-01/Q1.1",
          "2": "land-individual-indifferent-01/Q1.2"
        }
      },
      "adv": {
        "question": "land-individual-indifferent-01/Q2",
        "options": {
          "1": "land-individual-indifferent-01/Q2.1",
          "2": "land-individual-indifferent-01/Q2.2"
        }
      },
      "deportation": {
        "question": "land-individual-indifferent-01/Q3",
        "options": {
          "1": "land-individual-indifferent-01/Q3.1",
          "2": "land-individual-indifferent-01/Q3.2"
        }
      },
      "disadv": {
        "question": "land-individual-indifferent-01/Q4",
        "options": {
          "1": "land-individual-indifferent-01/Q4.1",
          "2": "land-individual-indifferent-01/Q4.2"
        }
      },
      "notcare": {
        "question": "globalization-support-01/Q7",
        "options": {
          "1": "globalization-support-01/Q7.2",
          "2": "land-individual-indifferent-01/Q5.2"
        }
      },
      "indifferent": {
        "question": "land-individual-indifferent-01/Q6",
        "options": {
          "1": "monarchism-01/Q6.1",
          "2": "integralism-01/Q4.2"
        }
      },
      "change": {
        "question": "land-individual-indifferent-01/Q7",
        "options": {
          "1": "monarchism-01/Q6.1",
          "2": "integralism-01/Q4.2"
        }
      },
      "statusQuo": {
        "question": "land-individual-indifferent-01/Q8",
        "options": {
          "1": "globalization-support-01/Q1.1",
          "2": "globalization-support-01/Q1.2"
        }
      }
    },
    "resultRefs": {
      "ConstitutionalMonarchism": "globalization-support-01/R1",
      "ChristianDemocracy": "globalization-support-01/R2",
      "Liberalism": "globalization-support-01/R3",
      "OrdoLiberalism": "globalization-support-01/R4",
      "Neoconservatism": "globalization-support-01/R5",
      "Reaganism": "globalization-support-01/R6",
      "LiberalConservatism": "globalization-support-01/R7",
      "StateLiberalism": "globalization-support-01/R8",
      "EconomicLiberalism": "globalization-support-01/R9",
      "WhiteNationalism": "land-individual-indifferent-01/R4",
      "NationalCapitalism": "land-individual-indifferent-01/R5",
      "SocialDarwinism": "land-individual-indifferent-01/R3",
      "Conservatism": "land-individual-indifferent-01/R1",
      "Trumpism": "land-individual-indifferent-01/R2",
      "AuthoritarianCapitalism": "land-individual-indifferent-01/R6",
      "Pinochetism": "land-individual-indifferent-01/R7",
      "Mercantilism": "land-individual-indifferent-01/R8",
      "Bismarckism": "land-individual-indifferent-01/R9",
      "Homoconservatism": "land-individual-indifferent-01/R10",
      "Reactionary": "land-individual-indifferent-01/R11"
    },
    "sections": [
      {
        "id": "disglob",
        "title": "这个世界上的民族/种族？",
        "sources": [
          "logical.js:740"
        ],
        "notes": [],
        "entries": [
          {
            "id": "Q1",
            "label": "题目",
            "zh": "这个世界上的民族/种族？",
            "en": "How do the world’s ethnic and racial groups compare?",
            "note": "中文题干是未完成的片语，结合两个比较选项改成完整问句。ethnic and racial groups 对应「民族/种族」，比把民族一律写成国家更准确；题目仍询问群体之间的比较，不额外指定经济、文化或政治领域。",
            "selected": false,
            "priority": false
          },
          {
            "id": "Q1.1",
            "label": "选项 1",
            "zh": "存在一个/多个占绝对优势的",
            "en": "One or more have an overwhelming advantage",
            "note": "one or more 保留「一个/多个」，overwhelming advantage 自然表达「绝对优势」。advantage 保留原文的优势含义，没有自行加强为天生、永久或在所有方面都优越。",
            "selected": false,
            "priority": false
          },
          {
            "id": "Q1.2",
            "label": "选项 2",
            "zh": "都差不多不",
            "en": "They’re all about the same",
            "note": "按与上一选项相对的「都差不多」理解，about the same 是自然的直接表达。代码中的完整中文为「都差不多不」，末尾的「不」疑似多余字；中文原文照录，这条英文暂按「都差不多」拟写，请重点确认原意。",
            "selected": false,
            "priority": true
          }
        ]
      },
      {
        "id": "adv",
        "title": "对于其他不占优势的民族、群体、种族",
        "sources": [
          "logical.js:762"
        ],
        "notes": [],
        "entries": [
          {
            "id": "Q2",
            "label": "题目",
            "zh": "对于其他不占优势的民族、群体、种族",
            "en": "How should we treat ethnic, racial, or other groups that lack that advantage?",
            "note": "将「对于……」补成询问如何对待这些群体的完整问句。that advantage 承接上一题的优势，ethnic, racial, or other groups 保留民族、种族与其他群体的范围；不把「不占优势」改成低人一等。",
            "selected": false,
            "priority": false
          },
          {
            "id": "Q2.1",
            "label": "选项 1",
            "zh": "驱逐、征服或远离",
            "en": "Expel them, conquer them, or keep our distance",
            "note": "expel、conquer 和 keep our distance 分别对应驱逐、征服和远离，用 or 保留原文列出的不同做法。最后一项使用英语常用短语，比逐字写 far away 更自然。",
            "selected": false,
            "priority": false
          },
          {
            "id": "Q2.2",
            "label": "选项 2",
            "zh": "尽可能的欺负他们",
            "en": "Bully them as much as possible",
            "note": "bully 直接表达「欺负」，as much as possible 保留「尽可能」的程度。原文没有限定具体手段，因此保留其笼统含义，与上一选项的驱逐、征服或远离继续有别。",
            "selected": false,
            "priority": false
          }
        ]
      },
      {
        "id": "deportation",
        "title": "对于国家的结构？",
        "sources": [
          "logical.js:773"
        ],
        "notes": [],
        "entries": [
          {
            "id": "Q3",
            "label": "题目",
            "zh": "对于国家的结构？",
            "en": "What kind of country should we build?",
            "note": "从下面两个选项可见，本题比较国家的种族构成。kind of country 和 build 让题干与「建立一个……国家」自然衔接，避免英文把结构误读成政府部门的组织架构；不增添原选项没有的制度要求。",
            "selected": false,
            "priority": false
          },
          {
            "id": "Q3.1",
            "label": "选项 1",
            "zh": "建立一个种族纯净的白人国家",
            "en": "A racially pure white nation",
            "note": "white nation 和 racially pure 直接保留「白人国家」与「种族纯净」两个限定。这是对原选项立场的准确呈现，措辞不弱化成仅由白人占多数，也不把「纯净」当作额外的科学判断。",
            "selected": false,
            "priority": false
          },
          {
            "id": "Q3.2",
            "label": "选项 2",
            "zh": "不一定是白人国家",
            "en": "It doesn’t have to be a white nation",
            "note": "doesn’t have to be 自然表达「不一定是」。保留白人国家并非必需这一态度；不额外要求必须是某个其他种族的国家，也不擅自给这个选项加入种族纯净的条件。",
            "selected": false,
            "priority": false
          }
        ]
      },
      {
        "id": "WhiteNationalism",
        "title": "结果",
        "sources": [
          "logical.js:1061"
        ],
        "notes": [],
        "entries": [
          {
            "id": "R4",
            "label": "结果",
            "zh": "你的意识形态是：白人至上主义",
            "en": "Your result: White Supremacy",
            "note": "按实际显示的中文「白人至上主义」采用 White Supremacy。内部节点和图片名却写作 WhiteNationalism；White Supremacy 与 White Nationalism 含义相关但重心不同，不能仅按代码名称替换中文。宾夕法尼亚州人权委员会资料也区分这两个名称。请重点核对分类命名；本轮保留原分支和图片，不将 White Nationalism 列成同义候选。",
            "selected": false,
            "priority": true
          }
        ]
      },
      {
        "id": "NationalCapitalism",
        "title": "结果",
        "sources": [
          "logical.js:1065"
        ],
        "notes": [],
        "entries": [
          {
            "id": "R5",
            "label": "结果",
            "zh": "你的意识形态是：民族资本主义",
            "en": "Your result: National Capitalism",
            "note": "按「民族资本主义」和项目现有 NationalCapitalism 节点，采用 National Capitalism。保留民族这一限定，不把它改成没有原文依据的某种国家资本主义或纳粹主义。这个名称在本稿中作为项目的分类标签使用，不声称它有统一的学术定义；建议重点核对你希望这项标签指向的思想范围。",
            "selected": false,
            "priority": true
          }
        ]
      },
      {
        "id": "SocialDarwinism",
        "title": "结果",
        "sources": [
          "logical.js:1057"
        ],
        "notes": [],
        "entries": [
          {
            "id": "R3",
            "label": "结果",
            "zh": "你的意识形态是：社会达尔文主义",
            "en": "Your result: Social Darwinism",
            "note": "Social Darwinism 是「社会达尔文主义」的现成英文术语，美国大屠杀纪念馆的英文资料也使用这一名称，直接保留。结果句沿用已通过的 Your result，不根据术语的历史定义改写测试选项或分支。",
            "selected": false,
            "priority": false
          }
        ]
      },
      {
        "id": "disadv",
        "title": "你对于现状的看法",
        "sources": [
          "logical.js:751"
        ],
        "notes": [],
        "entries": [
          {
            "id": "Q4",
            "label": "题目",
            "zh": "你对于现状的看法",
            "en": "How should we approach the status quo?",
            "note": "status quo 是「现状」的自然政治语境表达。两个选项回答的是怎样对待现状，因此用 How should we approach… 将标题式中文写成完整问句，仍保留本题的行动选择。",
            "selected": false,
            "priority": false
          },
          {
            "id": "Q4.1",
            "label": "选项 1",
            "zh": "维持",
            "en": "Maintain it",
            "note": "maintain 直接对应「维持」，it 指题干中的 status quo。保留这一较简单的立场表达，让它与下一项额外要求主动行动的意思有区别。",
            "selected": false,
            "priority": false
          },
          {
            "id": "Q4.2",
            "label": "选项 2",
            "zh": "应采取主动手段维护",
            "en": "Take active steps to preserve it",
            "note": "take active steps 是「采取主动手段」的自然表达，preserve it 对应维护现状。保留 active 这一与上一项不同的要求，不把主动维护改成主动改变。",
            "selected": false,
            "priority": false
          }
        ]
      },
      {
        "id": "Conservatism",
        "title": "结果",
        "sources": [
          "logical.js:1053"
        ],
        "notes": [],
        "entries": [
          {
            "id": "R1",
            "label": "结果",
            "zh": "你的意识形态是：保守主义",
            "en": "Your result: Conservatism",
            "note": "Conservatism 是「保守主义」的现成名称，直接保留。原文没有特指美国的某个政党，也没有限定为某一种保守主义流派，因此结果不加这些范围限定。",
            "selected": false,
            "priority": false
          }
        ]
      },
      {
        "id": "Trumpism",
        "title": "结果",
        "sources": [
          "logical.js:1049"
        ],
        "notes": [],
        "entries": [
          {
            "id": "R2",
            "label": "结果",
            "zh": "你的意识形态是：特朗普主义",
            "en": "Your result: Trumpism",
            "note": "Trumpism 直接对应「特朗普主义」，也是项目现有 Trumpism 节点的名称。保留以特朗普命名的政治取向标签，不改成某个政党名、口号或单一政策，也不从时事中补入原文没有的评价。",
            "selected": false,
            "priority": false
          }
        ]
      },
      {
        "id": "notcare",
        "title": "你对共产主义的看法",
        "sources": [
          "logical.js:872"
        ],
        "notes": [],
        "entries": [
          {
            "id": "Q5.2",
            "label": "选项 2",
            "zh": "把他们全部逮捕、处决",
            "en": "Arrest and execute them all",
            "note": "arrest and execute 直接保留逮捕与处决两种行动，them all 保留「全部」。这里的他们承接共产主义话题中的人，而非思想本身。共同题干 What do you think of communism? 与选项 It’s generally bad 已通过，本轮复用；这个新选项单独提交，不将其弱化成一般反对或批评。",
            "selected": false,
            "priority": false
          }
        ]
      },
      {
        "id": "AuthoritarianCapitalism",
        "title": "结果",
        "sources": [
          "logical.js:1041"
        ],
        "notes": [],
        "entries": [
          {
            "id": "R6",
            "label": "结果",
            "zh": "你的意识形态是：威权资本主义",
            "en": "Your result: Authoritarian Capitalism",
            "note": "Authoritarian Capitalism 直接对应「威权资本主义」，两个词共同保留原分类的政治与经济含义。沿用 Authoritarian，不换成词义不同的 Totalitarian，也不省略 Capitalism。",
            "selected": false,
            "priority": false
          }
        ]
      },
      {
        "id": "Pinochetism",
        "title": "结果",
        "sources": [
          "logical.js:1045"
        ],
        "notes": [],
        "entries": [
          {
            "id": "R7",
            "label": "结果",
            "zh": "你的意识形态是：皮诺切特主义",
            "en": "Your result: Pinochetism",
            "note": "Pinochetism 对应「皮诺切特主义」，保留以皮诺切特命名的政治取向；学术英文也使用这一名称。采用已有节点的自然拼写，不改成仅指经济政策的标签。结果句继续沿用 Your result。",
            "selected": false,
            "priority": false
          }
        ]
      },
      {
        "id": "indifferent",
        "title": "除了特别有必要的情况以外，我们应该对现状进行改变吗？",
        "sources": [
          "logical.js:960"
        ],
        "notes": [],
        "entries": [
          {
            "id": "Q6",
            "label": "题目",
            "zh": "除了特别有必要的情况以外，我们应该对现状进行改变吗？",
            "en": "Should we change the status quo even when there’s no compelling need to do so?",
            "note": "中文的「除了特别有必要的情况以外」改成 even when there’s no compelling need，英语读者可以直接判断在没有充分必要性的情况下是否仍应改变。compelling need 保留较强的必要性要求；问题仍围绕改变现状，不把它泛化成是否支持所有改革。Yes 与 No 复用已通过的选项。",
            "selected": false,
            "priority": false
          }
        ]
      },
      {
        "id": "change",
        "title": "国家是否应该多出口少进口而从全世界吸取财富？",
        "sources": [
          "logical.js:971"
        ],
        "notes": [],
        "entries": [
          {
            "id": "Q7",
            "label": "题目",
            "zh": "国家是否应该多出口少进口而从全世界吸取财富？",
            "en": "Should the country export more and import less to bring in wealth from the rest of the world?",
            "note": "用完整的 Should…to… 问句衔接做法与目的。export more and import less 直接保留「多出口少进口」，bring in wealth 保留从世界其他地方吸取财富的目的，不把问题缩成只询问贸易差额，也不补入关税或其他原文没有的措施。Yes 与 No 复用已通过的选项。",
            "selected": false,
            "priority": false
          }
        ]
      },
      {
        "id": "Mercantilism",
        "title": "结果",
        "sources": [
          "logical.js:1001"
        ],
        "notes": [],
        "entries": [
          {
            "id": "R8",
            "label": "结果",
            "zh": "你的意识形态是：重商主义",
            "en": "Your result: Mercantilism",
            "note": "Mercantilism 是「重商主义」的现成英文名称，直接保留。它比 Commerce、Commercialism 等字面近似词更准确，不将结果替换成一般商业活动或某项具体贸易政策。",
            "selected": false,
            "priority": false
          }
        ]
      },
      {
        "id": "Bismarckism",
        "title": "结果",
        "sources": [
          "logical.js:1005"
        ],
        "notes": [],
        "entries": [
          {
            "id": "R9",
            "label": "结果",
            "zh": "你的意识形态是：俾斯麦主义",
            "en": "Your result: Bismarckism",
            "note": "按「俾斯麦主义」及项目现有 Bismarckism 节点采用 Bismarckism，保留以俾斯麦命名的分类。仅凭本分支这道进出口题不能替你将其重新定义为某种福利制度、现实政治或某个其他思想；这里保留项目名称，建议重点核对分类所指的范围。",
            "selected": false,
            "priority": true
          }
        ]
      },
      {
        "id": "statusQuo",
        "title": "你对同性恋的看法",
        "sources": [
          "logical.js:982"
        ],
        "notes": [],
        "entries": [
          {
            "id": "Q8",
            "label": "题目",
            "zh": "你对同性恋的看法",
            "en": "What’s your view on homosexuality?",
            "note": "这个中文题干直接改成 What’s your view on… 就是自然的英语立场问句。homosexuality 保留「同性恋」这一原话题，原文未特指婚姻、权利或整个 LGBT 群体，因此不擅自改成那些范围。支持和反对的按钮继续复用已通过的 I support it 与 I oppose it，it 在当前题目中指向清楚。",
            "selected": false,
            "priority": false
          }
        ]
      },
      {
        "id": "Homoconservatism",
        "title": "结果",
        "sources": [
          "logical.js:1009"
        ],
        "notes": [],
        "entries": [
          {
            "id": "R10",
            "label": "结果",
            "zh": "你的意识形态是：LGBT保守主义",
            "en": "Your result: LGBT Conservatism",
            "note": "中文已经使用 LGBT，LGBT Conservatism 直接对应「LGBT保守主义」，作为结果标签清楚自然。内部节点为 Homoconservatism，但显示文本按中文保留 LGBT 的完整范围，不仅限于 gay，也不额外扩成原文没有的 LGBT+ 或某个政党名称。",
            "selected": false,
            "priority": false
          }
        ]
      },
      {
        "id": "Reactionary",
        "title": "结果",
        "sources": [
          "logical.js:1013"
        ],
        "notes": [],
        "entries": [
          {
            "id": "R11",
            "label": "结果",
            "zh": "你的意识形态是：反动主义",
            "en": "Your result: Reactionary Politics",
            "note": "reactionary 是自然的政治用词；单独作为名词时常指持这种立场的人。这里的中文是「反动主义」这一政治取向，因此用 Reactionary Politics 作为结果标签，让它与其他思想名称一样指向观点而非给用户贴个人称号。保留 reactionary 的原意，不将其弱化成一般保守主义，也不用意思不同的 Reactive。",
            "selected": false,
            "priority": false
          }
        ]
      }
    ],
    "references": [
      {
        "label": "White Supremacy 与 White Nationalism 的区别 · Pennsylvania Human Relations Commission",
        "url": "https://www.pa.gov/content/dam/copapwp-pagov/en/phrc/phrc-outreach/english/white%20supremacy.pdf"
      },
      {
        "label": "Social Darwinism 用语 · United States Holocaust Memorial Museum",
        "url": "https://encyclopedia.ushmm.org/content/en/article/antisemitism-in-history-racial-antisemitism-18751945"
      },
      {
        "label": "Pinochetism 用语 · Cambridge University Press",
        "url": "https://www.cambridge.org/core/services/aop-cambridge-core/content/view/90807A5ED6E6F789D80A7BADBA3CE1E3/9781009786928c5_101-122.pdf/chile.pdf"
      },
      {
        "label": "reactionary 的词性与含义 · Merriam-Webster",
        "url": "https://www.merriam-webster.com/dictionary/reactionary"
      }
    ]
  },
  {
    "id": "economic-market-mixed-indifferent-01",
    "archived": true,
    "title": "市场、混合经济及无偏好后的全部分支",
    "date": "2026-10-13",
    "route": [
      "国家内应该实行哪种经济模式？",
      "市场经济 / 混合计划经济和市场经济 / 无所谓"
    ],
    "scope": {
      "question": "equality",
      "options": [
        "1",
        "3",
        "4"
      ],
      "includeEntryQuestion": true
    },
    "copyRefs": {
      "equality": {
        "question": "economic-market-mixed-indifferent-01/Q1",
        "options": {
          "1": "economic-market-mixed-indifferent-01/Q1.1",
          "2": "economic-market-mixed-indifferent-01/Q1.2",
          "3": "economic-market-mixed-indifferent-01/Q1.3",
          "4": "economic-market-mixed-indifferent-01/Q1.4"
        }
      },
      "market": {
        "question": "economic-market-mixed-indifferent-01/Q2",
        "options": {
          "1": "economic-market-mixed-indifferent-01/Q2.1",
          "2": "economic-market-mixed-indifferent-01/Q2.2"
        }
      },
      "mixed": {
        "question": "economic-market-mixed-indifferent-01/Q3",
        "options": {
          "1": "economic-market-mixed-indifferent-01/Q3.1",
          "2": "economic-market-mixed-indifferent-01/Q3.2"
        }
      },
      "intervene": {
        "question": "economic-market-mixed-indifferent-01/Q4",
        "options": {
          "1": "monarchism-01/Q6.1",
          "2": "integralism-01/Q4.2"
        }
      },
      "notall": {
        "question": "economic-market-mixed-indifferent-01/Q5",
        "options": {
          "1": "economic-market-mixed-indifferent-01/Q5.1",
          "2": "economic-market-mixed-indifferent-01/Q5.2"
        }
      }
    },
    "resultRefs": {
      "ThirdWay": "economic-market-mixed-indifferent-01/R1",
      "Distributism": "economic-market-mixed-indifferent-01/R2",
      "Titoism": "economic-market-mixed-indifferent-01/R3",
      "Longism": "economic-market-mixed-indifferent-01/R4",
      "StateCapitalism": "economic-market-mixed-indifferent-01/R5",
      "EnlightenedAbsolutism": "economic-market-mixed-indifferent-01/R6",
      "SocialistTranshumanism": "economic-market-mixed-indifferent-01/R7"
    },
    "sections": [
      {
        "id": "equality",
        "title": "国家内应该实行哪种经济模式？",
        "sources": [
          "logical.js:491"
        ],
        "notes": [],
        "entries": [
          {
            "id": "Q1",
            "label": "题目",
            "zh": "国家内应该实行哪种经济模式？",
            "en": "What kind of economy should a country have?",
            "note": "美国英语里直接问 a country 应采用怎样的 economy 就很自然；不需要逐字补出「国家内」或把「实行」写成 implement。a country 保留泛指国家的范围，不改成只问用户自己的国家。",
            "selected": false,
            "priority": false
          },
          {
            "id": "Q1.1",
            "label": "选项 1",
            "zh": "市场经济",
            "en": "A market economy",
            "note": "Market economy 就是「市场经济」的现成英文表达，直译合适。加 A 后能自然回答上面的 What kind of economy 问句。Free market 额外强调市场不受干预，capitalism 指资本主义制度，都不能在这里直接替换原文。",
            "selected": false,
            "priority": false
          },
          {
            "id": "Q1.2",
            "label": "选项 2",
            "zh": "计划经济",
            "en": "A planned economy",
            "note": "Planned economy 是自然、准确的经济制度名称，直接保留。入口题四个选项一起列出方便核对；本轮不展开选择这一项后的路线。",
            "selected": false,
            "priority": false
          },
          {
            "id": "Q1.3",
            "label": "选项 3",
            "zh": "混合计划经济和市场经济",
            "en": "A mix of economic planning and market forces",
            "note": "英语通常说 economic planning 和 market forces 的结合，比重复堆叠两种 economy 更顺畅。保留计划与市场同时存在这一层意思；只写 A mixed economy 会更宽泛，不能充分交代原文明确指出的两种机制。",
            "selected": false,
            "priority": false
          },
          {
            "id": "Q1.4",
            "label": "选项 4",
            "zh": "无所谓",
            "en": "I don’t have a preference",
            "note": "这里表示对经济模式没有偏好。I don’t have a preference 是美国软件中自然的选择用语；I don’t care 的语气更像不关心，Either is fine 又容易暗示只在两项之间选。也不改成 Not sure，因为没有偏好不等于不知道。",
            "selected": false,
            "priority": false
          }
        ]
      },
      {
        "id": "market",
        "title": "我们如何在市场经济的模式下降低贫富差距？",
        "sources": [
          "logical.js:668"
        ],
        "notes": [],
        "entries": [
          {
            "id": "Q2",
            "label": "题目",
            "zh": "我们如何在市场经济的模式下降低贫富差距？",
            "en": "How should we narrow the gap between rich and poor in a market economy?",
            "note": "Narrow the gap between rich and poor 是自然的英语搭配，保留「降低贫富差距」的整体意思；不只改问收入差距或财产差距。in a market economy 已交代经济模式，无需逐字写 under the model of a market economy。",
            "selected": false,
            "priority": false
          },
          {
            "id": "Q2.1",
            "label": "选项 1",
            "zh": "通过税收平衡财富",
            "en": "Distribute wealth more evenly through taxation",
            "note": "More evenly 自然表达「平衡财富」，through taxation 保留税收这一手段。不把原文进一步解释成提高某种税、实现完全平均，或增加原文没有提到的福利措施。",
            "selected": false,
            "priority": false
          },
          {
            "id": "Q2.2",
            "label": "选项 2",
            "zh": "通过把大企业拆分成数个小企业平衡财富",
            "en": "Distribute wealth more evenly by breaking up large companies into smaller ones",
            "note": "Break up large companies into smaller ones 是清楚自然的美国英语，保留拆分大企业这个具体手段。前半句与上一项一致，便于比较两种办法；不缩成 support small businesses，也不自行补入反垄断、没收或企业所有权方面的条件。",
            "selected": false,
            "priority": false
          }
        ]
      },
      {
        "id": "ThirdWay",
        "title": "结果",
        "sources": [
          "logical.js:1105"
        ],
        "notes": [],
        "entries": [
          {
            "id": "R1",
            "label": "结果",
            "zh": "你的意识形态是：第三条道路",
            "en": "Your result: Third Way",
            "note": "Third Way 是「第三条道路」这一政治取向的英文名称，直接采用，名称用语可参见来源中的 Giddens 著作。沿用已审查过的 Your result: 结果格式，不逐字重复 Your ideology is，也不把 Way 换成字面上的 Road。",
            "selected": false,
            "priority": false
          }
        ]
      },
      {
        "id": "Distributism",
        "title": "结果",
        "sources": [
          "logical.js:1109"
        ],
        "notes": [],
        "entries": [
          {
            "id": "R2",
            "label": "结果",
            "zh": "你的意识形态是：分产主义",
            "en": "Your result: Distributism",
            "note": "Distributism 是「分产主义」的现成英文名称，Chesterton Society 也使用这一名称，直译合适。不改名为 Redistribution 或 Wealth Distribution，这些词描述财富再分配或分布，并不是本结果的思想名称。",
            "selected": false,
            "priority": false
          }
        ]
      },
      {
        "id": "mixed",
        "title": "我们应该如何协调同时使用市场经济和计划经济所造成的冲突？",
        "sources": [
          "logical.js:679"
        ],
        "notes": [],
        "entries": [
          {
            "id": "Q3",
            "label": "题目",
            "zh": "我们应该如何协调同时使用市场经济和计划经济所造成的冲突？",
            "en": "How should we handle conflicts that arise from combining economic planning and market forces?",
            "note": "英语用 handle conflicts 表达「协调冲突」更自然，combining economic planning and market forces 清楚说明冲突来自两种机制并用。保留原问题对冲突的设定，不改成只问如何取得平衡，也不增加取消其中一种机制的前提。",
            "selected": false,
            "priority": false
          },
          {
            "id": "Q3.1",
            "label": "选项 1",
            "zh": "实行工人自治，并在工人与政府之间设置类似“经理”的角色",
            "en": "Let workers manage their workplaces, with a manager-like role linking workers and the government",
            "note": "用 Let workers manage their workplaces 把经济语境下的工人自治写得更易读，含义对应 worker self-management。后半句保留类似经理的中间角色，不改成普通企业经理直接管理工人，也不补入谁任命这个角色、由谁持有企业或它拥有何种决策权。",
            "selected": false,
            "priority": false
          },
          {
            "id": "Q3.2",
            "label": "选项 2",
            "zh": "政府在较重要的领域介入并直接管控",
            "en": "Have the government intervene in key sectors and take direct control",
            "note": "经济语境中的「领域」自然写成 sectors，key 表达较重要的领域。Intervene 与 take direct control 分别保留介入和直接管控两层意思；不能只缩成 regulate，因为监管并不等于直接掌控，也不自行补入国有化。",
            "selected": false,
            "priority": false
          }
        ]
      },
      {
        "id": "Titoism",
        "title": "结果",
        "sources": [
          "logical.js:1113"
        ],
        "notes": [],
        "entries": [
          {
            "id": "R3",
            "label": "结果",
            "zh": "你的意识形态是：铁托主义",
            "en": "Your result: Titoism",
            "note": "Titoism 是「铁托主义」的常见英文名称，University of California Press 的相关研究也使用它。名称直接保留，不把结果改成更宽泛的 Market Socialism 或 Worker Self-Management；那些表达不能替代项目原有的具体分类。",
            "selected": false,
            "priority": false
          }
        ]
      },
      {
        "id": "intervene",
        "title": "政府是否因该实施广泛的社会福利？",
        "sources": [
          "logical.js:690"
        ],
        "notes": [],
        "entries": [
          {
            "id": "Q4",
            "label": "题目",
            "zh": "政府是否因该实施广泛的社会福利？",
            "en": "Should the government provide a broad range of social welfare programs?",
            "note": "中文「因该」疑似「应该」的错字，原文逐字保留；英文按是否应该提供福利的问句处理。Provide…programs 比逐字写 implement welfare 更自然，a broad range 保留「广泛」；不把社会福利缩成仅针对低收入者的现金补助。Yes 和 No 复用已审查条目。",
            "selected": false,
            "priority": true
          }
        ]
      },
      {
        "id": "Longism",
        "title": "结果",
        "sources": [
          "logical.js:1117"
        ],
        "notes": [],
        "entries": [
          {
            "id": "R4",
            "label": "结果",
            "zh": "你的意识形态是：休伊•朗主义",
            "en": "Your result: Longism",
            "note": "Longism 是以 Huey Long（休伊·朗）命名的英文政治术语，可参见 Louisiana Endowment for the Humanities 的 64 Parishes 词条。直接用这一现有名称，比拼造 Huey Longism 自然；不将这个具体结果改成一般的 Populism 或 Welfare State。",
            "selected": false,
            "priority": false
          }
        ]
      },
      {
        "id": "StateCapitalism",
        "title": "结果",
        "sources": [
          "logical.js:1405"
        ],
        "notes": [],
        "entries": [
          {
            "id": "R5",
            "label": "结果",
            "zh": "你的意识形态是：国家资本主义",
            "en": "Your result: State Capitalism",
            "note": "State Capitalism 直接对应「国家资本主义」，作为英文结果名称清楚自然。保留国家资本主义这一分类，不因前一道福利题的答案而另起一个更宽或更窄的名称。",
            "selected": false,
            "priority": false
          }
        ]
      },
      {
        "id": "notall",
        "title": "对待新技术我们应该？",
        "sources": [
          "logical.js:701"
        ],
        "notes": [],
        "entries": [
          {
            "id": "Q5",
            "label": "题目",
            "zh": "对待新技术我们应该？",
            "en": "How should we approach new technology?",
            "note": "How should we approach… 是自然的英语立场问句，直接保留对待新技术这一话题；不把问题改成只问是否支持科技，或只问采用速度，因为两项还区分了尝试新技术与用技术增强人类。",
            "selected": false,
            "priority": false
          },
          {
            "id": "Q5.1",
            "label": "选项 1",
            "zh": "逐渐尝试",
            "en": "Try it out gradually",
            "note": "Try it out 是美国英语里自然的「尝试」说法，it 清楚指向题干的 new technology，gradually 保留逐渐尝试的节奏。不额外添加「只有安全时」「先小规模测试」等原文没有的条件。",
            "selected": false,
            "priority": false
          },
          {
            "id": "Q5.2",
            "label": "选项 2",
            "zh": "尽可能使用技术升级人类",
            "en": "Use technology to enhance human beings as much as possible",
            "note": "谈人的技术增强时，enhance 比把人当作软件来 upgrade 更自然；human beings 保留「人类」作为增强对象。as much as possible 保留「尽可能」的程度，不弱化成普通技术进步，也不自行限定为人工智能、基因改造或延长寿命。",
            "selected": false,
            "priority": false
          }
        ]
      },
      {
        "id": "EnlightenedAbsolutism",
        "title": "结果",
        "sources": [
          "logical.js:1121"
        ],
        "notes": [],
        "entries": [
          {
            "id": "R6",
            "label": "结果",
            "zh": "你的意识形态是：开明君主制",
            "en": "Your result: Enlightened Monarchy",
            "note": "英文按显示中文采用 Enlightened Monarchy，准确保留「开明」与「君主制」。内部节点名 EnlightenedAbsolutism 对应更具体的「开明专制」，通常带有绝对君权及启蒙时代的历史含义，可参见 Aarhus University 的说明。仅凭本轮的新技术题不能替中文补入这些限定；这里标为重点，供你核对原结果究竟指一般开明君主制还是那个历史专名。",
            "selected": false,
            "priority": true
          }
        ]
      },
      {
        "id": "SocialistTranshumanism",
        "title": "结果",
        "sources": [
          "logical.js:1125"
        ],
        "notes": [],
        "entries": [
          {
            "id": "R7",
            "label": "结果",
            "zh": "你的意识形态是：社会主义超人类主义",
            "en": "Your result: Socialist Transhumanism",
            "note": "Socialist 与 Transhumanism 的组合准确保留原结果名称，英文表达可以直接沿用。Transhumanism 指通过科技增强人类的思想；相关技术增强用语可参见 Humanity+，不换成意思不同的 Superhumanism，也不另改名为范围更宽的科技进步主义。",
            "selected": false,
            "priority": false
          }
        ]
      }
    ],
    "references": [
      {
        "label": "Third Way 名称 · Giddens / Wiley",
        "url": "https://www.wiley-vch.de/de/fachgebiete/geistes-und-sozialwissenschaften/the-third-way-978-0-7456-2267-5"
      },
      {
        "label": "Distributism 用语 · Chesterton Society",
        "url": "https://www.chesterton.org/localism/"
      },
      {
        "label": "Titoism 与工人自治 · University of California Press / JSTOR",
        "url": "https://www.jstor.org/stable/jj.8500940"
      },
      {
        "label": "Longism 用语 · 64 Parishes / Louisiana Endowment for the Humanities",
        "url": "https://64parishes.org/entry/longism"
      },
      {
        "label": "Enlightened Absolutism 的历史范围 · Aarhus University",
        "url": "https://cas.au.dk/en/danish-history/modules/module-5-absolute-monarchy-1660-1814"
      },
      {
        "label": "Transhumanism 与人类技术增强 · Humanity+",
        "url": "https://www.humanityplus.org/philosophy"
      }
    ]
  },
  {
    "id": "economic-planned-01",
    "archived": true,
    "title": "计划经济后的全部分支",
    "date": "2026-10-13",
    "route": [
      "国家内应该实行哪种经济模式？",
      "计划经济"
    ],
    "scope": {
      "question": "equality",
      "options": [
        "2"
      ],
      "includeEntryQuestion": true
    },
    "copyRefs": {
      "equality": {
        "question": "economic-market-mixed-indifferent-01/Q1",
        "options": {
          "1": "economic-market-mixed-indifferent-01/Q1.1",
          "2": "economic-market-mixed-indifferent-01/Q1.2",
          "3": "economic-market-mixed-indifferent-01/Q1.3",
          "4": "economic-market-mixed-indifferent-01/Q1.4"
        }
      },
      "command": {
        "question": "economic-planned-01/Q1",
        "options": {
          "1": "economic-planned-01/Q1.1",
          "2": "economic-planned-01/Q1.2",
          "3": "economic-planned-01/Q1.3"
        }
      },
      "national": {
        "question": "economic-planned-01/Q2",
        "options": {
          "1": "economic-planned-01/Q2.1",
          "2": "economic-planned-01/Q2.2"
        }
      },
      "civil": {
        "question": "economic-planned-01/Q5",
        "options": {
          "1": "economic-planned-01/Q5.1",
          "2": "economic-planned-01/Q5.2",
          "3": "economic-planned-01/Q5.3"
        }
      },
      "conple": {
        "question": "economic-planned-01/Q6",
        "options": {
          "1": "economic-planned-01/Q6.1",
          "2": "economic-planned-01/Q6.2",
          "3": "economic-planned-01/Q6.3"
        }
      },
      "flex": {
        "question": "economic-planned-01/Q7",
        "options": {
          "1": "economic-planned-01/Q7.1",
          "2": "economic-planned-01/Q7.2"
        }
      },
      "peasant": {
        "question": "economic-planned-01/Q8",
        "options": {
          "1": "economic-planned-01/Q8.1",
          "2": "economic-planned-01/Q8.2"
        }
      },
      "race": {
        "question": "economic-planned-01/Q3",
        "options": {
          "1": "economic-planned-01/Q3.1",
          "2": "economic-planned-01/Q3.2"
        }
      },
      "direct": {
        "question": "economic-planned-01/Q4",
        "options": {
          "1": "economic-planned-01/Q4.1",
          "2": "economic-planned-01/Q4.2"
        }
      },
      "inter": {
        "question": "economic-planned-01/Q9",
        "options": {
          "1": "economic-planned-01/Q9.1",
          "2": "economic-planned-01/Q9.2",
          "3": "economic-planned-01/Q9.3"
        }
      },
      "now": {
        "question": "economic-planned-01/Q11",
        "options": {
          "1": "economic-planned-01/Q11.1",
          "2": "economic-planned-01/Q11.2"
        }
      },
      "rebui": {
        "question": "economic-planned-01/Q12",
        "options": {
          "1": "monarchism-01/Q6.1",
          "2": "integralism-01/Q4.2"
        }
      },
      "nohivemind": {
        "question": "economic-planned-01/Q13",
        "options": {
          "1": "economic-planned-01/Q13.1",
          "2": "economic-planned-01/Q13.2"
        }
      },
      "criti": {
        "question": "economic-planned-01/Q14",
        "options": {
          "1": "economic-planned-01/Q14.1",
          "2": "economic-planned-01/Q14.2"
        }
      },
      "try": {
        "question": "economic-planned-01/Q10",
        "options": {
          "1": "economic-planned-01/Q10.1",
          "2": "economic-planned-01/Q10.2"
        }
      }
    },
    "resultRefs": {
      "Stalinism": "economic-planned-01/R13",
      "Maoism": "economic-planned-01/R14",
      "Castroism": "economic-planned-01/R15",
      "MonarchoSocialism": "economic-planned-01/R16",
      "Mugabeism": "economic-planned-01/R17",
      "LeftWingNationalism": "economic-planned-01/R18",
      "Jacobinism": "economic-planned-01/R19",
      "NationalSyndicalism": "economic-planned-01/R10",
      "NationalBolshevism": "economic-planned-01/R11",
      "Bolsheviknationalism": "economic-planned-01/R12",
      "Collectivism": "economic-planned-01/R2",
      "HiveMindCollectivism": "economic-planned-01/R6",
      "Marxism": "economic-planned-01/R7",
      "LeftCommunism": "economic-planned-01/R8",
      "Eurocommunism": "economic-planned-01/R9",
      "Baathism": "economic-planned-01/R5",
      "LeftWingPopulism": "economic-planned-01/R3",
      "Trotskyism": "economic-planned-01/R4",
      "Strasserism": "economic-planned-01/R1"
    },
    "sections": [
      {
        "id": "command",
        "title": "我们应该在哪些地方实现上述思想？",
        "sources": [
          "logical.js:506"
        ],
        "notes": [],
        "entries": [
          {
            "id": "Q1",
            "label": "题目",
            "zh": "我们应该在哪些地方实现上述思想？",
            "en": "Where should we put these ideas into practice?",
            "note": "把「实现上述思想」写成 put these ideas into practice，是自然的英语搭配；these ideas 继续指前面选择的立场，不自行改成只传播某一种主义，也不逐字使用生硬的 aforementioned ideas。",
            "selected": false,
            "priority": false
          },
          {
            "id": "Q1.1",
            "label": "选项 1",
            "zh": "自己的国家/民族内",
            "en": "Within our own country or ethnic group",
            "note": "Within 保留内部范围，our own 延续题干的 we。「民族」结合下一题对全体国民与民族／种族的区分，暂按 ethnic group 理解；不把国家与民族合并成一个 nation。中文用斜线并列两种范围，英文用 or，不要求两者必须同时满足。这里的「民族」是否原本也包含政治意义上的 nation，值得核对。",
            "selected": false,
            "priority": true
          },
          {
            "id": "Q1.2",
            "label": "选项 2",
            "zh": "不能仅限于自己的国家/民族",
            "en": "Beyond our own country or ethnic group",
            "note": "Beyond 自然表达「不能仅限于」的范围要求；与上一项的 Within 形成清楚对照。仍保留国家或民族两个范围，不擅自扩大为必须覆盖全世界，也不补入武力扩张或对外干预。",
            "selected": false,
            "priority": false
          },
          {
            "id": "Q1.3",
            "label": "选项 3",
            "zh": "不能仅限于自己的国家，但在特定的民族内",
            "en": "Beyond our own country, but within a specific ethnic group",
            "note": "用 but 清楚保留两重条件：跨出自己的国家，同时限于特定民族。不能简写成 Internationally，因为那样会丢失民族范围；也不补入原文没有指定的民族名称。",
            "selected": false,
            "priority": false
          }
        ]
      },
      {
        "id": "national",
        "title": "你更倾向于在哪些人之中实现上述思想？",
        "sources": [
          "logical.js:519"
        ],
        "notes": [],
        "entries": [
          {
            "id": "Q2",
            "label": "题目",
            "zh": "你更倾向于在哪些人之中实现上述思想？",
            "en": "Who should be included when we put these ideas into practice?",
            "note": "把「在哪些人之中实现」改成询问包含哪些人的完整问句，英文更自然。这里继续比较适用人群；不把它改成谁负责执行、谁掌权，或用户属于哪个群体。",
            "selected": false,
            "priority": false
          },
          {
            "id": "Q2.1",
            "label": "选项 1",
            "zh": "国家内，包括所有国民",
            "en": "Within the country, including all citizens",
            "note": "Including all citizens 可以直接保留，within the country 保留国家内部这一限定。Citizens 对应「国民」，不替换成范围不同的 residents。原文没有进一步说明非公民居民的待遇，译文也不自行补设排除政策。",
            "selected": false,
            "priority": false
          },
          {
            "id": "Q2.2",
            "label": "选项 2",
            "zh": "在指定的民族/种族内",
            "en": "Within a specific ethnic or racial group",
            "note": "Ethnic or racial group 自然对应「民族／种族」，specific 对应「指定」。保留这两种群体概念，不改成更宽泛的 community，也不替用户指定某个群体。",
            "selected": false,
            "priority": false
          }
        ]
      },
      {
        "id": "civil",
        "title": "对于土地改革与农业集体化的看法",
        "sources": [
          "logical.js:552"
        ],
        "notes": [],
        "entries": [
          {
            "id": "Q5",
            "label": "题目",
            "zh": "对于土地改革与农业集体化的看法",
            "en": "What’s your view on land reform and agricultural collectivization?",
            "note": "Land reform 和 agricultural collectivization 都是自然的现成表达，直译合适。把中文片段补成完整问句即可，不需要为本地化换掉政策概念。",
            "selected": false,
            "priority": false
          },
          {
            "id": "Q5.1",
            "label": "选项 1",
            "zh": "彻底土地改革和农业集体化",
            "en": "Comprehensive land reform and agricultural collectivization",
            "note": "Comprehensive 表达土地改革的彻底程度，后半句保留农业集体化；作为政策选项，这个名词短语很自然。不擅自把土地改革解释成一种特定的没收或分配方案。",
            "selected": false,
            "priority": false
          },
          {
            "id": "Q5.2",
            "label": "选项 2",
            "zh": "土地改革但对农业集体化态度灵活",
            "en": "Land reform with a flexible approach to agricultural collectivization",
            "note": "A flexible approach 自然表达「态度灵活」；保留支持土地改革与对集体化灵活处理的组合。不改成反对集体化，也不补设只能自愿参加的条件。",
            "selected": false,
            "priority": false
          },
          {
            "id": "Q5.3",
            "label": "选项 3",
            "zh": "土地改革并支持小农经济",
            "en": "Land reform and support for smallholder farming",
            "note": "Smallholder farming 对应小农经营这一概念，比逐字写 small-peasant economy 更自然；术语用法可参见来源中的 FAO 页面。保留土地改革与支持小农经营两层意思，不把小农经济自动等同于贫困、仅供自给或必须完全私有。",
            "selected": false,
            "priority": false
          }
        ]
      },
      {
        "id": "conple",
        "title": "你对经济现代化和工业化的政策",
        "sources": [
          "logical.js:565"
        ],
        "notes": [],
        "entries": [
          {
            "id": "Q6",
            "label": "题目",
            "zh": "你对经济现代化和工业化的政策",
            "en": "Which approach to economic modernization and industrialization do you favor?",
            "note": "中文是「你……的政策」式片段，英文改成询问偏好哪种政策路径的完整问句。Modernization 与 industrialization 都可直接保留，不把二者合并成较宽泛的 economic growth。",
            "selected": false,
            "priority": false
          },
          {
            "id": "Q6.1",
            "label": "选项 1",
            "zh": "通过国家控制快速工业化更优先",
            "en": "Prioritize rapid industrialization under state control",
            "note": "Prioritize 自然表达「更优先」，rapid industrialization 与 under state control 分别保留速度和国家控制。没有额外加入不计代价、完全取消市场或特定历史计划。",
            "selected": false,
            "priority": false
          },
          {
            "id": "Q6.2",
            "label": "选项 2",
            "zh": "农村工业化和群众动员更优先",
            "en": "Prioritize rural industrialization and mass mobilization",
            "note": "Rural industrialization 和 mass mobilization 都是合适的现成政治表达，直译可保留。两项并列且共同优先，不把群众动员缩成志愿服务，也不自行加入强制动员。",
            "selected": false,
            "priority": false
          },
          {
            "id": "Q6.3",
            "label": "选项 3",
            "zh": "国家控制经济，同时注重农业集体化",
            "en": "Keep the economy under state control while emphasizing agricultural collectivization",
            "note": "While 自然连接国家控制经济与同时重视农业集体化两个要求。Emphasizing 保留「注重」，不改成已经完成集体化；也不添加前两项独有的快速或农村工业化限定。",
            "selected": false,
            "priority": false
          }
        ]
      },
      {
        "id": "Stalinism",
        "title": "结果",
        "sources": [
          "logical.js:1177"
        ],
        "notes": [],
        "entries": [
          {
            "id": "R13",
            "label": "结果",
            "zh": "你的意识形态是：斯大林主义",
            "en": "Your result: Stalinism",
            "note": "Stalinism 是「斯大林主义」的现成英文名称，直译就自然；不改成范围更宽的苏联社会主义。",
            "selected": false,
            "priority": false
          }
        ]
      },
      {
        "id": "Maoism",
        "title": "结果",
        "sources": [
          "logical.js:1181"
        ],
        "notes": [],
        "entries": [
          {
            "id": "R14",
            "label": "结果",
            "zh": "你的意识形态是：毛泽东思想",
            "en": "Your result: Mao Zedong Thought",
            "note": "显示中文是「毛泽东思想」，因此优先采用其正式英文名称 Mao Zedong Thought；中国官方英文文本也使用这一表达，来源可查。内部节点和图片文件名是 Maoism，常见的 Maoism 范围与用法并不在所有语境下都和这个正式名称完全一致，不能只按节点名替换显示文案。这里需要核对你实际想报告的结果名称。",
            "selected": false,
            "priority": true
          }
        ]
      },
      {
        "id": "Castroism",
        "title": "结果",
        "sources": [
          "logical.js:1185"
        ],
        "notes": [],
        "entries": [
          {
            "id": "R15",
            "label": "结果",
            "zh": "你的意识形态是：卡斯特罗主义",
            "en": "Your result: Castroism",
            "note": "Castroism 自然对应以卡斯特罗命名的「卡斯特罗主义」，保留项目的具体结果名称。不改成更宽泛的 Cuban Socialism，也不加原文没有的 Fidel 名称限定。",
            "selected": false,
            "priority": false
          }
        ]
      },
      {
        "id": "flex",
        "title": "对于帝国主义，你的看法是？",
        "sources": [
          "logical.js:578"
        ],
        "notes": [],
        "entries": [
          {
            "id": "Q7",
            "label": "题目",
            "zh": "对于帝国主义，你的看法是？",
            "en": "What’s your view on imperialism?",
            "note": "Imperialism 是「帝国主义」的现成英文名称，直接使用常见的 What’s your view on 问句即可。",
            "selected": false,
            "priority": false
          },
          {
            "id": "Q7.1",
            "label": "选项 1",
            "zh": "这是不公正的秩序，导致了资源的不平等分配",
            "en": "It’s an unjust system that leads to an unequal distribution of resources",
            "note": "用 unjust system 表达这里的「不公正的秩序」，比直译 unjust order 更易读；leads to 保留原文的因果判断。Unequal distribution of resources 可以直接保留，不增加原文没有提到的行为或历史事件。",
            "selected": false,
            "priority": false
          },
          {
            "id": "Q7.2",
            "label": "选项 2",
            "zh": "强烈反对，帝国主义是造成贫困和动荡的根源",
            "en": "I strongly oppose it. Imperialism is the root cause of poverty and instability",
            "note": "把较长选项分成两句，便于阅读；strongly oppose 和 root cause 分别保留「强烈反对」与「根源」的力度。这是用户可选择的观点，不能为了温和语气改成 merely contributes to，也不补入题目没有指定的国家。",
            "selected": false,
            "priority": false
          }
        ]
      },
      {
        "id": "MonarchoSocialism",
        "title": "结果",
        "sources": [
          "logical.js:1189"
        ],
        "notes": [],
        "entries": [
          {
            "id": "R16",
            "label": "结果",
            "zh": "你的意识形态是：君主制社会主义",
            "en": "Your result: Monarchist Socialism",
            "note": "Monarchist Socialism 用较容易理解的形容词说明社会主义与君主制的组合，读者无需先认识 Monarcho- 前缀。保留两部分含义，不改成 Constitutional Monarchy，也不补入君主权力大小的条件。另列的候选保留项目内部的复合命名方式，两者是同一结果的两种表达。",
            "selected": false,
            "priority": false,
            "alternatives": [
              {
                "id": "compound-name",
                "en": "Your result: Monarcho-Socialism",
                "note": "Monarcho-Socialism 保留内部节点 MonarchoSocialism 的复合命名方式，也便于与项目其他 Monarcho- 类别统一。Monarchist Socialism 更容易让初次接触的读者直接理解；这版更适合采用统一政治标签命名的产品风格。两者都保留君主制与社会主义的组合。"
              }
            ]
          }
        ]
      },
      {
        "id": "Mugabeism",
        "title": "结果",
        "sources": [
          "logical.js:1193"
        ],
        "notes": [],
        "entries": [
          {
            "id": "R17",
            "label": "结果",
            "zh": "你的意识形态是：穆加贝主义",
            "en": "Your result: Mugabeism",
            "note": "Mugabeism 自然对应「穆加贝主义」，相关研究著作 Mugabeism? 也使用这一名称，来源可查。不把书名中的问号带进结果名称，也不替换成泛指津巴布韦政治的标签。",
            "selected": false,
            "priority": false
          }
        ]
      },
      {
        "id": "peasant",
        "title": "对于反对革命的人我们应该？",
        "sources": [
          "logical.js:589"
        ],
        "notes": [],
        "entries": [
          {
            "id": "Q8",
            "label": "题目",
            "zh": "对于反对革命的人我们应该？",
            "en": "How should we respond to people who oppose the revolution?",
            "note": "How should we respond to 自然补全中文「我们应该？」的省略。保留对象是反对革命的人，不扩大为所有批评者，也不提前替两个选项规定相同的处理手段。",
            "selected": false,
            "priority": false
          },
          {
            "id": "Q8.1",
            "label": "选项 1",
            "zh": "我们反对反革命者",
            "en": "Oppose counterrevolutionaries",
            "note": "Counterrevolutionaries 是「反革命者」的现成表达，oppose 可直接保留。作为回答如何应对的按钮，用动词开头更自然；没有替原文补入逮捕、驱逐或仅口头反对的限制。",
            "selected": false,
            "priority": false
          },
          {
            "id": "Q8.2",
            "label": "选项 2",
            "zh": "处决他们",
            "en": "Execute them",
            "note": "直译就清楚自然。保留原文明确提出的处决，不改写成拘留或一般惩罚，也不增加新的对象或条件。",
            "selected": false,
            "priority": false
          }
        ]
      },
      {
        "id": "LeftWingNationalism",
        "title": "结果",
        "sources": [
          "logical.js:1197"
        ],
        "notes": [],
        "entries": [
          {
            "id": "R18",
            "label": "结果",
            "zh": "你的意识形态是：左翼民族主义",
            "en": "Your result: Left-Wing Nationalism",
            "note": "Left-wing nationalism 就是自然、准确的「左翼民族主义」名称，直译可保留。保留原文左右翼定位，不擅自改成一种特定的公民民族主义或种族民族主义。",
            "selected": false,
            "priority": false
          }
        ]
      },
      {
        "id": "Jacobinism",
        "title": "结果",
        "sources": [
          "logical.js:1201"
        ],
        "notes": [],
        "entries": [
          {
            "id": "R19",
            "label": "结果",
            "zh": "你的意识形态是：雅各宾派",
            "en": "Your result: Jacobinism",
            "note": "中文「雅各宾派」字面上指 Jacobins 这个群体；结合此处的意识形态结果与内部节点 Jacobinism，暂采用表示其政治思想的 Jacobinism，英语结果标签更自然。该名称也出现在来源中的研究书名中。如果原意确实是历史派别本身而非思想名称，应改为 the Jacobins；两者不是可无条件互换的候选。",
            "selected": false,
            "priority": true
          }
        ]
      },
      {
        "id": "race",
        "title": "国家内的经济需要工团来领导吗？",
        "sources": [
          "logical.js:530"
        ],
        "notes": [],
        "entries": [
          {
            "id": "Q3",
            "label": "题目",
            "zh": "国家内的经济需要工团来领导吗？",
            "en": "Should labor unions run the country’s economy?",
            "note": "经济与工团主义语境中的「工团」用美国读者熟悉的 labor unions 表达；run the economy 保留实际领导经济的作用。不是仅仅让工会提出意见，也不把工团写成容易被理解为商业联合体或犯罪团伙的 syndicates。",
            "selected": false,
            "priority": false
          },
          {
            "id": "Q3.1",
            "label": "选项 1",
            "zh": "需要",
            "en": "Yes",
            "note": "题干已经完整问出是否应由工团领导经济，因此 Yes 自然表达「需要」。不必逐字写 Needed；中文原文与已审查的「是」不同，保留这条对应记录。",
            "selected": false,
            "priority": false
          },
          {
            "id": "Q3.2",
            "label": "选项 2",
            "zh": "最好是国家直接掌控",
            "en": "Direct state control would be better",
            "note": "Would be better 保留「最好」的偏好语气，direct state control 保留国家直接掌控的具体模式。State 在这里指国家权力，不指美国的某一个州；不能缩成 government regulation，因为监管与直接控制并非同一件事。",
            "selected": false,
            "priority": false
          }
        ]
      },
      {
        "id": "NationalSyndicalism",
        "title": "结果",
        "sources": [
          "logical.js:1165"
        ],
        "notes": [],
        "entries": [
          {
            "id": "R10",
            "label": "结果",
            "zh": "你的意识形态是：民族工团主义",
            "en": "Your result: National Syndicalism",
            "note": "National Syndicalism 对应「民族工团主义」，是可直接使用的思想名称；来源中的历史文本章节也采用这一名称。不改成 National Socialism 或一般的工会主义，以免更换结果类别。",
            "selected": false,
            "priority": false
          }
        ]
      },
      {
        "id": "direct",
        "title": "减小贫富差距和排斥一些其他民族哪个优先级更高？",
        "sources": [
          "logical.js:541"
        ],
        "notes": [],
        "entries": [
          {
            "id": "Q4",
            "label": "题目",
            "zh": "减小贫富差距和排斥一些其他民族哪个优先级更高？",
            "en": "Which should take priority: narrowing the gap between rich and poor or excluding certain other ethnic groups?",
            "note": "沿用 Which should take priority 的自然比较句式；narrowing the gap 保留缩小贫富差距，certain other ethnic groups 保留「一些其他民族」。不把排斥改成仅限制移民、驱逐或伤害，原文没有指定这些具体手段。",
            "selected": false,
            "priority": false
          },
          {
            "id": "Q4.1",
            "label": "选项 1",
            "zh": "减小贫富差距",
            "en": "Narrowing the gap between rich and poor",
            "note": "Narrowing the gap 是自然的英语搭配，直接回答优先做哪件事。保留贫富差距的总体含义，不缩窄成仅收入差距，也不强化为彻底消除差距。",
            "selected": false,
            "priority": false
          },
          {
            "id": "Q4.2",
            "label": "选项 2",
            "zh": "排斥其他民族",
            "en": "Excluding other ethnic groups",
            "note": "Excluding 保留「排斥」的立场，other ethnic groups 保留原文对象。不改写成一般的文化保护，也不增加原文没有规定的对象名单或具体措施。",
            "selected": false,
            "priority": false
          }
        ]
      },
      {
        "id": "NationalBolshevism",
        "title": "结果",
        "sources": [
          "logical.js:1169"
        ],
        "notes": [],
        "entries": [
          {
            "id": "R11",
            "label": "结果",
            "zh": "你的意识形态是：民族布尔什维克主义",
            "en": "Your result: National Bolshevism",
            "note": "National Bolshevism 是「民族布尔什维克主义」的英文名称，相关研究标题可在来源中核对。保留它与另一个结果 Bolshevik Nationalism 的词序和项目内区分，不合并节点。",
            "selected": false,
            "priority": false
          }
        ]
      },
      {
        "id": "Bolsheviknationalism",
        "title": "结果",
        "sources": [
          "logical.js:1173"
        ],
        "notes": [],
        "entries": [
          {
            "id": "R12",
            "label": "结果",
            "zh": "你的意识形态是：布尔什维克民族主义",
            "en": "Your result: Bolshevik Nationalism",
            "note": "按显示中文「布尔什维克民族主义」采用 Bolshevik Nationalism，区别于另一结果 National Bolshevism。这里保留项目原有的两个分类；不能仅凭中文词序就认定它们是学界公认的两种独立流派，也不擅自将此项更名或合并。",
            "selected": false,
            "priority": true
          }
        ]
      },
      {
        "id": "inter",
        "title": "你对新技术的态度",
        "sources": [
          "logical.js:600"
        ],
        "notes": [],
        "entries": [
          {
            "id": "Q9",
            "label": "题目",
            "zh": "你对新技术的态度",
            "en": "What’s your view on new technology?",
            "note": "New technology 是自然的概括表达，technology 在题干中用不可数形式；不增加原文没有限定的人工智能或某一具体技术。",
            "selected": false,
            "priority": false
          },
          {
            "id": "Q9.1",
            "label": "选项 1",
            "zh": "只对能实现目标的接受",
            "en": "Accept only technologies that can help us achieve our goals",
            "note": "用 can help us achieve our goals 表达技术能帮助实现目标，句式自然且保留 only 的限制。Our 延续本路线的 we，不替原文指定目标内容；也不改成只接受经过验证的技术。",
            "selected": false,
            "priority": false
          },
          {
            "id": "Q9.2",
            "label": "选项 2",
            "zh": "对目前有利的接受",
            "en": "Accept technologies that are beneficial right now",
            "note": "Beneficial right now 自然表达「目前有利」，保留当前时点的判断。不增加上一项才有的 only，也不把有利改成安全、成熟或长期必然有利。",
            "selected": false,
            "priority": false
          },
          {
            "id": "Q9.3",
            "label": "选项 3",
            "zh": "是在现在看来可能不利的技术也要尝试",
            "en": "Try technologies even if they seem to have potential downsides right now",
            "note": "中文开头「是在」句式不完整，疑似缺字或误字，原文逐字保留；结合「也要尝试」按即使目前看来可能不利仍要尝试理解。Seem、potential 和 right now 保留看来、可能与当前三个限定；downsides 不夸大为必然造成伤害。",
            "selected": false,
            "priority": true
          }
        ]
      },
      {
        "id": "Collectivism",
        "title": "结果",
        "sources": [
          "logical.js:1133"
        ],
        "notes": [],
        "entries": [
          {
            "id": "R2",
            "label": "结果",
            "zh": "你的意识形态是：集体主义",
            "en": "Your result: Collectivism",
            "note": "Collectivism 就是「集体主义」的现成英文名称，直译自然。保留该名称的总体范围，不自行改成共产主义或蜂群思维集体主义。",
            "selected": false,
            "priority": false
          }
        ]
      },
      {
        "id": "now",
        "title": "你对待传统的态度？",
        "sources": [
          "logical.js:624"
        ],
        "notes": [],
        "entries": [
          {
            "id": "Q11",
            "label": "题目",
            "zh": "你对待传统的态度？",
            "en": "How should we approach tradition?",
            "note": "把「对待传统的态度」写成询问如何对待传统的完整英语问句，与两个行动式选项自然衔接。Tradition 保留泛指，不自行缩成宗教、家庭观念或本国传统。",
            "selected": false,
            "priority": false
          },
          {
            "id": "Q11.1",
            "label": "选项 1",
            "zh": "拒绝或重构传统",
            "en": "Reject or reshape traditions",
            "note": "Reject 直接保留「拒绝」，reshape 用常见动词表达对传统重新塑造，比机械写 reconstruct traditions 更顺畅。保留两种处理方式，不改成必须全部抛弃，也不只写轻微调整。",
            "selected": false,
            "priority": false
          },
          {
            "id": "Q11.2",
            "label": "选项 2",
            "zh": "传统选择性保留",
            "en": "Preserve traditions selectively",
            "note": "Preserve…selectively 可以自然、准确地直接表达「选择性保留」。不规定筛选标准，也不把选择性保留写成完全维护所有传统。",
            "selected": false,
            "priority": false
          }
        ]
      },
      {
        "id": "rebui",
        "title": "在你的理想中，我们是否应该把所有人的大脑组装成一个集体大脑控制所有人？",
        "sources": [
          "logical.js:635"
        ],
        "notes": [],
        "entries": [
          {
            "id": "Q12",
            "label": "题目",
            "zh": "在你的理想中，我们是否应该把所有人的大脑组装成一个集体大脑控制所有人？",
            "en": "In your ideal world, should we combine everyone’s brains into one collective brain that controls everyone?",
            "note": "In your ideal world 自然表达「在你的理想中」，combine everyone’s brains 保留将大脑组装在一起的具体设想。One collective brain 和 controls everyone 均保留，不弱化成共享知识、互相协作或仅连接意识。Yes、No 复用已审查条目。",
            "selected": false,
            "priority": false
          }
        ]
      },
      {
        "id": "HiveMindCollectivism",
        "title": "结果",
        "sources": [
          "logical.js:1149"
        ],
        "notes": [],
        "entries": [
          {
            "id": "R6",
            "label": "结果",
            "zh": "你的意识形态是：蜂群思维集体主义",
            "en": "Your result: Hive-Mind Collectivism",
            "note": "Hive mind 自然表达共同意识或集体心智，用作修饰语时写成 Hive-Mind。这个结果保留项目自身的命名，不宣称它是统一的学术分类，也不缩成普通 Collectivism，避免与本路线另一个结果混同。",
            "selected": false,
            "priority": false
          }
        ]
      },
      {
        "id": "nohivemind",
        "title": "对斯大林时期的苏联你的态度是？",
        "sources": [
          "logical.js:646"
        ],
        "notes": [],
        "entries": [
          {
            "id": "Q13",
            "label": "题目",
            "zh": "对斯大林时期的苏联你的态度是？",
            "en": "What’s your view of the Soviet Union under Stalin?",
            "note": "The Soviet Union under Stalin 是清楚自然的历史时期表达，比逐字堆叠 during Stalin’s period 更顺畅。问的是对这一时期苏联的态度，不换成只评价斯大林个人。",
            "selected": false,
            "priority": false
          },
          {
            "id": "Q13.1",
            "label": "选项 1",
            "zh": "持积极态度，至少认为可以学到一些教训",
            "en": "I view it positively, or at least believe we can learn some lessons from it",
            "note": "用 or at least 自然表达从积极评价到「至少能学到教训」的程度范围。Learn some lessons 保留「教训」本身可能包含正面或负面经验的空间，不擅自改成值得效仿的成功经验。原文把积极态度与汲取教训放在同一选项，其具体关系值得核对。",
            "selected": false,
            "priority": true
          },
          {
            "id": "Q13.2",
            "label": "选项 2",
            "zh": "持批评态度，可能更倾向于支持其他形式",
            "en": "I’m critical of it and may favor other approaches",
            "note": "I’m critical of it 与 may favor 分别保留批评态度和「可能更倾向」的语气。Other approaches 对应原文未具体说明的其他形式，不自行指定某种社会主义制度，也不扩大为否定所有共产主义。",
            "selected": false,
            "priority": false
          }
        ]
      },
      {
        "id": "Marxism",
        "title": "结果",
        "sources": [
          "logical.js:1153"
        ],
        "notes": [],
        "entries": [
          {
            "id": "R7",
            "label": "结果",
            "zh": "你的意识形态是：正统马克思主义",
            "en": "Your result: Orthodox Marxism",
            "note": "Orthodox Marxism 是「正统马克思主义」的现成英文表达，Lukács 的原著标题也使用这一名称。虽然内部节点叫 Marxism，显示中文含「正统」，英文保留这一限定；不自行换成 Marxism-Leninism。",
            "selected": false,
            "priority": false
          }
        ]
      },
      {
        "id": "criti",
        "title": "上述思想在不同国家内实现应该？",
        "sources": [
          "logical.js:657"
        ],
        "notes": [],
        "entries": [
          {
            "id": "Q14",
            "label": "题目",
            "zh": "上述思想在不同国家内实现应该？",
            "en": "How should these ideas be put into practice in different countries?",
            "note": "把中文省略句补成完整问句，继续用 these ideas 指前文思想；in different countries 保留比较国家间实践方式的范围。不是重新询问应在哪些国家实施。",
            "selected": false,
            "priority": false
          },
          {
            "id": "Q14.1",
            "label": "选项 1",
            "zh": "在每个国家内应该相差不大",
            "en": "In much the same way in every country",
            "note": "Much the same 自然对应「相差不大」，保留允许小差异的程度。不写 exactly the same，因为原文没有要求完全一致。",
            "selected": false,
            "priority": false
          },
          {
            "id": "Q14.2",
            "label": "选项 2",
            "zh": "对于不同的国家有略微不同的变化",
            "en": "With slight adjustments for each country",
            "note": "Slight adjustments 自然表达「略微不同的变化」，for each country 保留随国家调整。不扩展成每个国家采用完全不同的制度，也不自行规定调整依据。",
            "selected": false,
            "priority": false
          }
        ]
      },
      {
        "id": "LeftCommunism",
        "title": "结果",
        "sources": [
          "logical.js:1157"
        ],
        "notes": [],
        "entries": [
          {
            "id": "R8",
            "label": "结果",
            "zh": "你的意识形态是：左翼共产主义",
            "en": "Your result: Left Communism",
            "note": "Left Communism 是「左翼共产主义」这一流派的英文名称，直译可保留。不能改成较宽泛的 left-wing politics，也不自行与本路线的 Orthodox Marxism 合并。",
            "selected": false,
            "priority": false
          }
        ]
      },
      {
        "id": "Eurocommunism",
        "title": "结果",
        "sources": [
          "logical.js:1161"
        ],
        "notes": [],
        "entries": [
          {
            "id": "R9",
            "label": "结果",
            "zh": "你的意识形态是：欧洲共产主义",
            "en": "Your result: Eurocommunism",
            "note": "Eurocommunism 是「欧洲共产主义」这一具体政治流派的英文名称，Carrillo 的著作标题也使用它，来源可查。作为一个词书写，比 European Communism 更能明确这里是一个流派，而不只是欧洲各地的共产主义。",
            "selected": false,
            "priority": false
          }
        ]
      },
      {
        "id": "Baathism",
        "title": "结果",
        "sources": [
          "logical.js:1145"
        ],
        "notes": [],
        "entries": [
          {
            "id": "R5",
            "label": "结果",
            "zh": "你的意识形态是：复兴主义",
            "en": "Your result: Baathism",
            "note": "这里的「复兴主义」结合内部节点 Baathism，指 Baathism，而不是一般意义的 revivalism。采用方便软件显示的常见拼写 Baathism；Max Weiss 在来源中的文章也使用这一拼写。不因为中文含「复兴」就改成民族复兴等更宽泛标签。",
            "selected": false,
            "priority": false
          }
        ]
      },
      {
        "id": "try",
        "title": "实现上述思想的途径？",
        "sources": [
          "logical.js:613"
        ],
        "notes": [],
        "entries": [
          {
            "id": "Q10",
            "label": "题目",
            "zh": "实现上述思想的途径？",
            "en": "How should we put these ideas into practice?",
            "note": "与前面询问范围的 Where should we… 呼应，这里用 How 询问实现方式。These ideas 保留对前文立场的指代，不把问题改成是否支持这些思想。",
            "selected": false,
            "priority": false
          },
          {
            "id": "Q10.1",
            "label": "选项 1",
            "zh": "民主途径",
            "en": "Through democratic means",
            "note": "Democratic means 是「民主途径」的自然表达，可直接保留。不缩窄成仅投票或仅议会改革，因为原文没有指定具体民主机制。",
            "selected": false,
            "priority": false
          },
          {
            "id": "Q10.2",
            "label": "选项 2",
            "zh": "革命途径",
            "en": "Through revolution",
            "note": "Through revolution 自然对应「革命途径」。不自行加入 violent 或 armed，因为原文未规定革命是否必须使用暴力。",
            "selected": false,
            "priority": false
          }
        ]
      },
      {
        "id": "LeftWingPopulism",
        "title": "结果",
        "sources": [
          "logical.js:1137"
        ],
        "notes": [],
        "entries": [
          {
            "id": "R3",
            "label": "结果",
            "zh": "你的意识形态是：左翼民粹主义",
            "en": "Your result: Left-Wing Populism",
            "note": "Left-wing populism 是自然、准确的现成表达。Left-Wing 作修饰语时加连字符，沿用项目结果名称的首字母大写格式；不用给这个通用术语另起名称。",
            "selected": false,
            "priority": false
          }
        ]
      },
      {
        "id": "Trotskyism",
        "title": "结果",
        "sources": [
          "logical.js:1141"
        ],
        "notes": [],
        "entries": [
          {
            "id": "R4",
            "label": "结果",
            "zh": "你的意识形态是：托洛茨基主义",
            "en": "Your result: Trotskyism",
            "note": "Trotskyism 是「托洛茨基主义」的现成英文名称，直译合适。不把结果仅写成更宽泛的革命社会主义。",
            "selected": false,
            "priority": false
          }
        ]
      },
      {
        "id": "Strasserism",
        "title": "结果",
        "sources": [
          "logical.js:1129"
        ],
        "notes": [],
        "entries": [
          {
            "id": "R1",
            "label": "结果",
            "zh": "你的意识形态是：斯特拉瑟主义",
            "en": "Your result: Strasserism",
            "note": "Strasserism 是这一具体思想名称的英文表达，可直接保留；名称用法见来源中的术语页面。不改成更宽泛的 National Socialism，也不因路线涉及民族范围而另创一个结果类别。",
            "selected": false,
            "priority": false
          }
        ]
      }
    ],
    "references": [
      {
        "label": "Mao Zedong Thought 正式名称 · 中国政府英文网",
        "url": "https://english.www.gov.cn/news/top_news/2017/09/27/content_281475888488000.htm"
      },
      {
        "label": "Orthodox Marxism 用语 · Lukács 原著 / Marxists Internet Archive",
        "url": "https://www.marxists.org/archive/lukacs/works/history/orthodox.htm"
      },
      {
        "label": "Smallholder farming 用语 · FAO",
        "url": "https://www.fao.org/family-farming/detail/en/c/273864/"
      },
      {
        "label": "Baathism 拼写 · Max Weiss / Social Science Research Council",
        "url": "https://tif.ssrc.org/2021/06/22/is-baathism-an-arabic-word/"
      },
      {
        "label": "National Bolshevism 名称 · The Review of Politics / Cambridge University Press",
        "url": "https://www.cambridge.org/core/journals/review-of-politics/article/abs/towards-a-fourth-reich-the-history-of-national-bolshevism-in-germany/E760E1BC94C6EB69567A0F041BA477CB"
      },
      {
        "label": "National Syndicalism 名称 · Spanish Fascist Writing 历史文本选集",
        "url": "https://www.degruyterbrill.com/document/doi/10.3138/9781487512194-014/html"
      },
      {
        "label": "Eurocommunism 名称 · Carrillo 著作 / Weber State University Library",
        "url": "https://libcat.weber.edu/bib/1054089"
      },
      {
        "label": "Mugabeism 名称 · Palgrave Macmillan 著作 / University of Pretoria",
        "url": "https://upjournals.up.ac.za/index.php/strategic_review/article/view/259"
      },
      {
        "label": "Jacobinism 名称 · Cambridge University Press 研究著作",
        "url": "https://assets.cambridge.org/97810091/58350/frontmatter/9781009158350_frontmatter.pdf"
      },
      {
        "label": "Strasserism 名称 · Wikipedia（辅助术语核对）",
        "url": "https://en.wikipedia.org/wiki/Strasserism"
      }
    ]
  },
  {
    "id": "violence-retaliation-not-priority-01",
    "archived": true,
    "title": "暴力应对：反击、报复与不是重点",
    "date": "2026-10-13",
    "scope": {
      "question": "should2",
      "options": [
        "1",
        "2"
      ],
      "includeEntryQuestion": true
    },
    "copyRefs": {
      "should2": {
        "question": "violence-retaliation-not-priority-01/Q1",
        "options": {
          "1": "violence-retaliation-not-priority-01/Q1.1",
          "2": "violence-retaliation-not-priority-01/Q1.2"
        }
      },
      "retaliation": {
        "question": "violence-retaliation-not-priority-01/Q2",
        "options": {
          "1": "monarchism-01/Q6.1",
          "2": "integralism-01/Q4.2"
        }
      },
      "religions": {
        "question": "violence-retaliation-not-priority-01/Q3",
        "options": {
          "1": "monarchism-01/Q6.1",
          "2": "integralism-01/Q4.2"
        }
      },
      "noreligions": {
        "question": "violence-retaliation-not-priority-01/Q4",
        "options": {
          "1": "violence-retaliation-not-priority-01/Q4.1",
          "2": "violence-retaliation-not-priority-01/Q4.2"
        }
      },
      "noupdate": {
        "question": "violence-retaliation-not-priority-01/Q5",
        "options": {
          "1": "violence-retaliation-not-priority-01/Q5.1",
          "2": "violence-retaliation-not-priority-01/Q5.2"
        }
      },
      "agreefreemarket": {
        "question": "violence-retaliation-not-priority-01/Q6",
        "options": {
          "1": "monarchism-01/Q6.1",
          "2": "integralism-01/Q4.2"
        }
      },
      "yescommunity": {
        "question": "violence-retaliation-not-priority-01/Q7",
        "options": {
          "1": "violence-retaliation-not-priority-01/Q7.1",
          "2": "violence-retaliation-not-priority-01/Q7.2"
        }
      },
      "nocommunity": {
        "question": "violence-retaliation-not-priority-01/Q8",
        "options": {
          "1": "violence-retaliation-not-priority-01/Q8.1",
          "2": "violence-retaliation-not-priority-01/Q8.2"
        }
      },
      "disagreefreemarket": {
        "question": "violence-retaliation-not-priority-01/Q9",
        "options": {
          "1": "violence-retaliation-not-priority-01/Q9.1",
          "2": "violence-retaliation-not-priority-01/Q9.2"
        }
      },
      "notimportant": {
        "question": "violence-retaliation-not-priority-01/Q10",
        "options": {
          "1": "violence-retaliation-not-priority-01/Q10.1",
          "2": "violence-retaliation-not-priority-01/Q10.2",
          "3": "violence-retaliation-not-priority-01/Q10.3"
        }
      },
      "portect": {
        "question": "monarchism-01/Q6",
        "options": {
          "1": "monarchism-01/Q6.1",
          "2": "integralism-01/Q4.2",
          "3": "economic-market-mixed-indifferent-01/Q1.4"
        }
      },
      "othersfreedom": {
        "question": "violence-retaliation-not-priority-01/Q12",
        "options": {
          "1": "monarchism-01/Q6.1",
          "2": "integralism-01/Q4.2"
        }
      },
      "currencyissuance": {
        "question": "violence-retaliation-not-priority-01/Q13",
        "options": {
          "1": "globalization-support-01/Q1.1",
          "2": "violence-retaliation-not-priority-01/Q13.2"
        }
      },
      "economicglobalization": {
        "question": "violence-retaliation-not-priority-01/Q14",
        "options": {
          "1": "monarchism-01/Q6.1",
          "2": "integralism-01/Q4.2"
        }
      },
      "nocurrencyissuance": {
        "question": "violence-retaliation-not-priority-01/Q15",
        "options": {
          "1": "monarchism-01/Q6.1",
          "2": "integralism-01/Q4.2"
        }
      },
      "outofenforcingthelaw": {
        "question": "violence-retaliation-not-priority-01/Q16",
        "options": {
          "1": "violence-retaliation-not-priority-01/Q16.1",
          "2": "violence-retaliation-not-priority-01/Q16.2"
        }
      }
    },
    "resultRefs": {
      "Paleolibertarianism": "violence-retaliation-not-priority-01/R1",
      "LibertarianConservatism": "violence-retaliation-not-priority-01/R2",
      "LibertarianTranshumanism": "violence-retaliation-not-priority-01/R3",
      "SocialLibertarianism": "violence-retaliation-not-priority-01/R4",
      "Hoppeanism": "violence-retaliation-not-priority-01/R5",
      "Libertarianism": "violence-retaliation-not-priority-01/R6",
      "LiberalLibertarianism": "violence-retaliation-not-priority-01/R7",
      "Geolibertarianism": "violence-retaliation-not-priority-01/R8",
      "DistributistLibertarianism": "violence-retaliation-not-priority-01/R9",
      "Korwinism": "violence-retaliation-not-priority-01/R10",
      "NeoliberalConservatism": "violence-retaliation-not-priority-01/R11",
      "NationalLiberalism": "violence-retaliation-not-priority-01/R12",
      "PinkCapitalism": "violence-retaliation-not-priority-01/R13",
      "Neoliberalism": "violence-retaliation-not-priority-01/R14",
      "ClassicalLiberalism": "violence-retaliation-not-priority-01/R15",
      "Minarchism": "violence-retaliation-not-priority-01/R16",
      "Voluntaryism": "violence-retaliation-not-priority-01/R17",
      "Hayekism": "violence-retaliation-not-priority-01/R18",
      "Objectivism": "violence-retaliation-not-priority-01/R19"
    },
    "sections": [
      {
        "id": "should2",
        "title": "对于已经发生在了自己身上的暴力事件？",
        "sources": [
          "logical.js:35"
        ],
        "notes": [],
        "entries": [
          {
            "id": "Q1",
            "label": "题目",
            "zh": "对于已经发生在了自己身上的暴力事件？",
            "en": "How should you respond after someone has used violence against you?",
            "note": "把中文省略的提问补成完整问句，用 after someone has used violence against you 明确这是暴力已经发生后的应对。保留「发生在自己身上」这一范围，不改成目击暴力，也不把时间改为正在遭到攻击时的自卫。",
            "selected": false,
            "priority": true
          },
          {
            "id": "Q1.1",
            "label": "选项 1",
            "zh": "强烈支持用自己的武器反击、报复",
            "en": "I strongly support using my own weapons to fight back or take revenge",
            "note": "Strongly support 保留「强烈支持」；my own weapons 保留使用自己的武器，不擅自缩成 guns。Fight back 和 take revenge 分别保留「反击」与「报复」，不能只写 defend myself，把原文中事后报复的立场删掉。",
            "selected": false,
            "priority": true
          },
          {
            "id": "Q1.2",
            "label": "选项 2",
            "zh": "这个问题不是重点",
            "en": "This isn’t a priority for me",
            "note": "这里是不把这件事当作判断立场的重点。Priority 比逐字写 This question is not the point 更像美国问卷中的自然选项，也不暗示用户反对反击、不会遇到暴力或不知道该怎么做。",
            "selected": false,
            "priority": false
          }
        ]
      },
      {
        "id": "retaliation",
        "title": "在国家中宗教、教会是否起到了非常重要的作用",
        "sources": [
          "logical.js:127"
        ],
        "notes": [],
        "entries": [
          {
            "id": "Q2",
            "label": "题目",
            "zh": "在国家中宗教、教会是否起到了非常重要的作用",
            "en": "Do religion and churches play a very important role in a country?",
            "note": "Religion、churches 和 play a very important role 都是自然表达，直译主体与程度合适。补上问号即可；原文询问是否起到作用，英文没有擅自改成它们是否应该掌权或国家是否应建立国教。",
            "selected": false,
            "priority": false
          }
        ]
      },
      {
        "id": "religions",
        "title": "你是否特别反对你的国家干预其他国家？",
        "sources": [
          "logical.js:138"
        ],
        "notes": [],
        "entries": [
          {
            "id": "Q3",
            "label": "题目",
            "zh": "你是否特别反对你的国家干预其他国家？",
            "en": "Do you strongly oppose your country intervening in other countries’ affairs?",
            "note": "Strongly oppose 准确保留「特别反对」的强度。Intervene in other countries’ affairs 是自然的完整搭配，涵盖对别国事务的干预；不缩窄成只反对战争，也不扩大成反对一切对外联系。",
            "selected": false,
            "priority": false
          }
        ]
      },
      {
        "id": "Paleolibertarianism",
        "title": "结果",
        "sources": [
          "logical.js:1369"
        ],
        "notes": [],
        "entries": [
          {
            "id": "R1",
            "label": "结果",
            "zh": "你的意识形态是：旧自由意志主义",
            "en": "Your result: Paleolibertarianism",
            "note": "Paleolibertarianism 是对应名称，不把「旧」机械译成 old。它也不能直接缩成此前的 Classical Liberalism，两种结果在本项目中分开。名称用法见来源中的 Libertarianism.org 文章。",
            "selected": false,
            "priority": false
          }
        ]
      },
      {
        "id": "LibertarianConservatism",
        "title": "结果",
        "sources": [
          "logical.js:1373"
        ],
        "notes": [],
        "entries": [
          {
            "id": "R2",
            "label": "结果",
            "zh": "你的意识形态是：自由意志保守主义",
            "en": "Your result: Libertarian Conservatism",
            "note": "Libertarian Conservatism 自然对应自由意志保守主义，保留这种组合。它与项目中的 Liberal Conservatism、Neoliberal Conservatism 是不同结果，不能因为都含保守主义而合并。",
            "selected": false,
            "priority": false
          }
        ]
      },
      {
        "id": "noreligions",
        "title": "对于使用新技术升级人类，你的看法是？",
        "sources": [
          "logical.js:149"
        ],
        "notes": [],
        "entries": [
          {
            "id": "Q4",
            "label": "题目",
            "zh": "对于使用新技术升级人类，你的看法是？",
            "en": "What do you think about using new technology to enhance humans?",
            "note": "把「升级人类」写成 enhance humans，比 upgrade humans 更适合谈人类自身增强，也避免软件升级的字面联想。保留 new technology 与人类增强的范围，不自行列入人工智能、基因编辑等具体技术，不改成泛泛的改善生活。Human enhancement 的用法可参照来源中的 Humanity+ 文本。",
            "selected": false,
            "priority": false
          },
          {
            "id": "Q4.1",
            "label": "选项 1",
            "zh": "非常支持",
            "en": "I strongly support it",
            "note": "Strongly support 保留「非常支持」；it 的对象由题干给出。这个完整选项在英语问卷里自然，不需要重复一遍人类增强的主题。",
            "selected": false,
            "priority": false
          },
          {
            "id": "Q4.2",
            "label": "选项 2",
            "zh": "这不是重点",
            "en": "This isn’t a priority for me",
            "note": "这里指人类增强不是主要关注点，不表示反对新技术。与暴力应对题的英文采用同一种自然说法，但两处中文原文不同、指代的议题也不同，因此保留各自的原文关联。",
            "selected": false,
            "priority": false
          }
        ]
      },
      {
        "id": "LibertarianTranshumanism",
        "title": "结果",
        "sources": [
          "logical.js:1377"
        ],
        "notes": [],
        "entries": [
          {
            "id": "R3",
            "label": "结果",
            "zh": "你的意识形态是：自由意志超人类主义",
            "en": "Your result: Libertarian Transhumanism",
            "note": "用 Libertarian 与 Transhumanism 组合，准确保留自由意志与超人类主义两部分；与已审查的 Socialist Transhumanism 使用一致的术语。没有把超人类误写成 superhumanism，也不把该结果改成支持技术的一般态度。",
            "selected": false,
            "priority": false
          }
        ]
      },
      {
        "id": "noupdate",
        "title": "对于自由市场，你的看法是？",
        "sources": [
          "logical.js:160"
        ],
        "notes": [],
        "entries": [
          {
            "id": "Q5",
            "label": "题目",
            "zh": "对于自由市场，你的看法是？",
            "en": "What do you think about the free market?",
            "note": "用美国问卷里常见的 What do you think about… 直接询问看法。The free market 是自然的概念名称，可以保留直译；不用改成 capitalism，后者的范围不同。",
            "selected": false,
            "priority": false
          },
          {
            "id": "Q5.1",
            "label": "选项 1",
            "zh": "完全支持自由市场",
            "en": "I fully support a free market",
            "note": "Fully support 准确保留「完全支持」。A free market 是自然表达；不额外加绝对不存在任何规则等原文没有写出的条件。",
            "selected": false,
            "priority": false
          },
          {
            "id": "Q5.2",
            "label": "选项 2",
            "zh": "质疑或部分反对完全的自由市场",
            "en": "I question the idea of a completely free market or oppose some aspects of it",
            "note": "把两种态度写成自然的完整表达：question the idea 保留对完全自由市场的质疑，oppose some aspects 保留只反对其中一部分。没有改成完全反对市场经济；completely free 保留原文限定，也不直接加上无政府等更强的制度主张。",
            "selected": false,
            "priority": false
          }
        ]
      },
      {
        "id": "agreefreemarket",
        "title": "社区的存在是否实现理想社会的重点之一",
        "sources": [
          "logical.js:182"
        ],
        "notes": [],
        "entries": [
          {
            "id": "Q6",
            "label": "题目",
            "zh": "社区的存在是否实现理想社会的重点之一",
            "en": "Are communities one of the keys to achieving an ideal society?",
            "note": "One of the keys to… 自然表达「重点之一」，communities 在这里泛指社区。句式调整后仍询问社区对理想社会的重要性；不把「重点」加强成唯一途径，也不限定为某一种社区制度。",
            "selected": false,
            "priority": false
          }
        ]
      },
      {
        "id": "yescommunity",
        "title": "社区的作用具体是？",
        "sources": [
          "logical.js:193"
        ],
        "notes": [],
        "entries": [
          {
            "id": "Q7",
            "label": "题目",
            "zh": "社区的作用具体是？",
            "en": "What role should communities play?",
            "note": "前一题已明确理想社会的语境，这里用 What role should communities play? 问社区应承担的具体作用，能自然衔接两种功能性选项。无需逐字补出 specifically，也不加入原文未指定的政府职责。",
            "selected": false,
            "priority": false
          },
          {
            "id": "Q7.1",
            "label": "选项 1",
            "zh": "在社区内外互帮互助",
            "en": "Provide mutual support within and beyond the community",
            "note": "Mutual support 对应互帮互助；within and beyond 保留社区内部与外部两个范围。这个表达不把互助限定为社区成员之间，也不自行改成政府福利或强制再分配。",
            "selected": false,
            "priority": false
          },
          {
            "id": "Q7.2",
            "label": "选项 2",
            "zh": "用社区隔离理念不同的人",
            "en": "Use communities to separate people with different beliefs",
            "note": "Separate 保留「隔离」的作用，different beliefs 在此指理念不同。没有改成只让志同道合的人自愿聚居，也没有新增驱逐、惩罚等原文未写的手段。",
            "selected": false,
            "priority": false
          }
        ]
      },
      {
        "id": "SocialLibertarianism",
        "title": "结果",
        "sources": [
          "logical.js:1389"
        ],
        "notes": [],
        "entries": [
          {
            "id": "R4",
            "label": "结果",
            "zh": "你的意识形态是：社会自由意志主义",
            "en": "Your result: Social Libertarianism",
            "note": "中文与项目节点都指向 Social Libertarianism，这一组合名称可直接保留。来源中的 Map My Politics 也使用这个名称，但其解释不作为本项目分支定义；不因 social 一词就改成已经有独立结果的 Libertarian Socialism。",
            "selected": false,
            "priority": true
          }
        ]
      },
      {
        "id": "Hoppeanism",
        "title": "结果",
        "sources": [
          "logical.js:1393"
        ],
        "notes": [],
        "entries": [
          {
            "id": "R5",
            "label": "结果",
            "zh": "你的意识形态是：霍普主义",
            "en": "Your result: Hoppeanism",
            "note": "沿用项目已有的 Hoppeanism 名称，对应 Hans-Hermann Hoppe 的思想，姓氏 Hoppe 不能按中文读音另造拼写。来源中的本人著作用于核对人名与语境；不把这个具体结果直接改成更宽泛的 Anarcho-Capitalism。",
            "selected": false,
            "priority": false
          }
        ]
      },
      {
        "id": "nocommunity",
        "title": "对于别人的行为，你认为？",
        "sources": [
          "logical.js:204"
        ],
        "notes": [],
        "entries": [
          {
            "id": "Q8",
            "label": "题目",
            "zh": "对于别人的行为，你认为？",
            "en": "How should you respond to other people’s behavior?",
            "note": "中文是一个省略式提问；结合两个选项，补成询问如何对待他人行为的完整问句更自然。不预设这些行为已经违法或伤害了用户。",
            "selected": false,
            "priority": false
          },
          {
            "id": "Q8.1",
            "label": "选项 1",
            "zh": "一些违反大多数人观念的事情需要被抵制",
            "en": "Some behavior that conflicts with the majority’s values should be opposed",
            "note": "Some 保留「一些」，conflicts with the majority’s values 保留与多数人的观念冲突。Opposed 表达抵制而不指定具体方式；不能直接改成 banned 或 punished，原文没有要求由政府禁止或处罚。",
            "selected": false,
            "priority": false
          },
          {
            "id": "Q8.2",
            "label": "选项 2",
            "zh": "就算我非常不喜欢这一行为，但如果没有实际影响到我，我都不会管",
            "en": "Even if I strongly dislike what someone is doing, I won’t interfere unless it actually affects me",
            "note": "把较长中文组织成 Even if… / unless… 句式，阅读更顺畅。保留强烈不喜欢也不干涉的立场，以及「实际影响到我」这一条件；affects 不缩窄成 harms，也不改成只要不违法就允许。",
            "selected": false,
            "priority": false
          }
        ]
      },
      {
        "id": "Libertarianism",
        "title": "结果",
        "sources": [
          "logical.js:1397"
        ],
        "notes": [],
        "entries": [
          {
            "id": "R6",
            "label": "结果",
            "zh": "你的意识形态是：自由意志主义",
            "en": "Your result: Libertarianism",
            "note": "美国政治语境下，Libertarianism 自然对应这里的自由意志主义，直接保留。不是 Liberalism，也不因词根与自由相关而把这两个项目结果合并；名称用法见 Stanford Encyclopedia of Philosophy。",
            "selected": false,
            "priority": false
          }
        ]
      },
      {
        "id": "LiberalLibertarianism",
        "title": "结果",
        "sources": [
          "logical.js:1401"
        ],
        "notes": [],
        "entries": [
          {
            "id": "R7",
            "label": "结果",
            "zh": "你的意识形态是：Liberal Libertarianism (自由主义自由意志主义?)",
            "en": "Your result: Liberal Libertarianism",
            "note": "原始结果已经含 Liberal Libertarianism，保留该项目名称；括号里的中文译名与问号是原稿中的命名犹疑，仍逐字显示在中文栏，英文结果不继续附上中文释义。来源中的 Liberal Libertarians 论文可核对这一英语词组的用法，但不能据此确认本项目把它作为独立类别的定义；不擅自改成 Liberalism 或 Social Libertarianism。",
            "selected": false,
            "priority": true
          }
        ]
      },
      {
        "id": "disagreefreemarket",
        "title": "你具体质疑或反对自由市场的哪一方面？",
        "sources": [
          "logical.js:171"
        ],
        "notes": [],
        "entries": [
          {
            "id": "Q9",
            "label": "题目",
            "zh": "你具体质疑或反对自由市场的哪一方面？",
            "en": "What specifically do you question or oppose about the free market?",
            "note": "What specifically… about… 是自然的追问方式，question 与 oppose 保留「质疑或反对」两种态度，不把质疑一概当成反对。",
            "selected": false,
            "priority": false
          },
          {
            "id": "Q9.1",
            "label": "选项 1",
            "zh": "土地应该归所有人拥有而不是投机者",
            "en": "Land should belong to everyone, rather than to speculators",
            "note": "Everyone 和 speculators 能准确、自然地保留所有人与投机者的对比。原文表达土地归属，不能仅因对应结果常讨论土地价值税，就把这一选项改写成征税政策。",
            "selected": false,
            "priority": false
          },
          {
            "id": "Q9.2",
            "label": "选项 2",
            "zh": "反对大资本家，但支持小资本家",
            "en": "I oppose big capitalists but support small ones",
            "note": "这里按资本家规模区分立场，capitalists 保留原文的政治经济学用语；small ones 避免重复。同一语境下这个直接表达可读，不改成只反对大公司、富人或某个行业，也不把资本家缩窄成普通创业者。",
            "selected": false,
            "priority": false
          }
        ]
      },
      {
        "id": "Geolibertarianism",
        "title": "结果",
        "sources": [
          "logical.js:1381"
        ],
        "notes": [],
        "entries": [
          {
            "id": "R8",
            "label": "结果",
            "zh": "你的意识形态是：乔治自由意志主义",
            "en": "Your result: Geolibertarianism",
            "note": "中文在这里指乔治主义与自由意志主义的结合，Geolibertarianism 是对应的英文名称，而不是按人名机械拼成 George Libertarianism。Fred Foldvary 的原文使用 Geo-Libertarianism；本稿沿用项目已有的无连字符写法，不把结果改成更宽泛的 Georgism。",
            "selected": false,
            "priority": false
          }
        ]
      },
      {
        "id": "DistributistLibertarianism",
        "title": "结果",
        "sources": [
          "logical.js:1385"
        ],
        "notes": [],
        "entries": [
          {
            "id": "R9",
            "label": "结果",
            "zh": "你的意识形态是：分产自由意志主义",
            "en": "Your result: Distributist Libertarianism",
            "note": "Distributist 对应分产主义，Libertarianism 对应自由意志主义，组合后与项目现有节点名称一致。按本项目的组合类别保留，不把它声称为有统一定义的独立学术流派，也不缩成此前已有的 Distributism。",
            "selected": false,
            "priority": true
          }
        ]
      },
      {
        "id": "notimportant",
        "title": "你如何看待传统价值观（比如传统家庭观念等等）？",
        "sources": [
          "logical.js:46"
        ],
        "notes": [],
        "entries": [
          {
            "id": "Q10",
            "label": "题目",
            "zh": "你如何看待传统价值观（比如传统家庭观念等等）？",
            "en": "What do you think about traditional values, including views on family?",
            "note": "Traditional values 是准确且自然的直译，传统范围也覆盖后面的家庭观念例子。Including views on family 让英文不再重复 traditional 或堆叠比如、等等；保留「观念」，不改成只问某种家庭结构或预设必须结婚。",
            "selected": false,
            "priority": false
          },
          {
            "id": "Q10.1",
            "label": "选项 1",
            "zh": "应该维护",
            "en": "They should be upheld",
            "note": "Uphold 是维护价值观的自然搭配；they 指题干中的传统价值观。没有改成用法律强制执行，也不增加 restore 的恢复旧秩序含义。",
            "selected": false,
            "priority": false
          },
          {
            "id": "Q10.2",
            "label": "选项 2",
            "zh": "应该质疑",
            "en": "They should be questioned",
            "note": "Questioned 直接保留「质疑」，在英语中自然。没有加强成 reject 或 abolish；质疑并不必然等于全盘否定。",
            "selected": false,
            "priority": false
          },
          {
            "id": "Q10.3",
            "label": "选项 3",
            "zh": "无所谓，如何选择是别人的自由",
            "en": "I don’t mind either way; others are free to choose",
            "note": "前半句保留自己无所谓的态度，后半句完整保留他人自由选择。只写 I don’t care 会丢掉后一层立场；也不改成自己认可所有传统价值。",
            "selected": false,
            "priority": false
          }
        ]
      },
      {
        "id": "Korwinism",
        "title": "结果",
        "sources": [
          "logical.js:1333"
        ],
        "notes": [],
        "entries": [
          {
            "id": "R10",
            "label": "结果",
            "zh": "你的意识形态是：科尔温主义",
            "en": "Your result: Korwinism",
            "note": "沿用项目的 Korwinism 专名，不用中文音译逐字造词，也不泛化成 Monarchism。这个结果按项目既有的人名思想标签保留，不根据单个君主选项重新定义整个类别。",
            "selected": false,
            "priority": false
          }
        ]
      },
      {
        "id": "NeoliberalConservatism",
        "title": "结果",
        "sources": [
          "logical.js:1337"
        ],
        "notes": [],
        "entries": [
          {
            "id": "R11",
            "label": "结果",
            "zh": "你的意识形态是：新自由保守主义",
            "en": "Your result: Neoliberal Conservatism",
            "note": "Neoliberal Conservatism 准确保留新自由主义与保守主义的组合；研究著作中也使用这个名称，见来源。不能缩成 Neoconservatism，后者是项目中另一种新保守主义结果。",
            "selected": false,
            "priority": false
          }
        ]
      },
      {
        "id": "NationalLiberalism",
        "title": "结果",
        "sources": [
          "logical.js:1341"
        ],
        "notes": [],
        "entries": [
          {
            "id": "R12",
            "label": "结果",
            "zh": "你的意识形态是：民族自由主义",
            "en": "Your result: National Liberalism",
            "note": "National Liberalism 自然对应这一结果，沿用项目名称。中文「民族」在不同语境可能涉及民族、国家或民族主义，这里不擅自加强成只允许特定族群的 Ethnic Liberalism，也不改成国家自由主义的 State Liberalism。",
            "selected": false,
            "priority": false
          }
        ]
      },
      {
        "id": "PinkCapitalism",
        "title": "结果",
        "sources": [
          "logical.js:1329"
        ],
        "notes": [],
        "entries": [
          {
            "id": "R13",
            "label": "结果",
            "zh": "你的意识形态是：粉色资本主义",
            "en": "Your result: Pink Capitalism",
            "note": "Pink Capitalism 是文献中实际使用的名称，这个直译可以保留，见来源中的研究著作。它并不是粉色外观的经济制度；但本题只写了对传统价值观的态度，不能为了让路线更贴近术语讨论而擅自新增 LGBTQ 等选项。",
            "selected": false,
            "priority": true
          }
        ]
      },
      {
        "id": "othersfreedom",
        "title": "发行货币是否是政府的职责？",
        "sources": [
          "logical.js:72"
        ],
        "notes": [],
        "entries": [
          {
            "id": "Q12",
            "label": "题目",
            "zh": "发行货币是否是政府的职责？",
            "en": "Is issuing currency the government’s responsibility?",
            "note": "Issuing currency 和 the government’s responsibility 都是自然且准确的表达，直译可保留。原文没有写政府是否拥有唯一发行权，因此不添加 exclusively，也不直接指定央行。",
            "selected": false,
            "priority": false
          }
        ]
      },
      {
        "id": "currencyissuance",
        "title": "对经济全球化的态度？",
        "sources": [
          "logical.js:105"
        ],
        "notes": [],
        "entries": [
          {
            "id": "Q13",
            "label": "题目",
            "zh": "对经济全球化的态度？",
            "en": "What’s your view of economic globalization?",
            "note": "补成自然的完整问句，economic globalization 准确保留「经济全球化」。不能直接复用此前更宽泛的 globalization 题干，否则会丢失本题的经济范围。",
            "selected": false,
            "priority": false
          },
          {
            "id": "Q13.2",
            "label": "选项 2",
            "zh": "无所谓/中立",
            "en": "I’m indifferent or neutral",
            "note": "Indifferent 与 neutral 分别保留「无所谓／中立」两种态度，原文用斜线合并为同一选项。Or 自然呈现这种合并，不把没有偏好或中立误写成 Not sure，也不假定用户反对全球化。",
            "selected": false,
            "priority": false
          }
        ]
      },
      {
        "id": "economicglobalization",
        "title": "你是否支持政府应该实施反垄断？",
        "sources": [
          "logical.js:116"
        ],
        "notes": [],
        "entries": [
          {
            "id": "Q14",
            "label": "题目",
            "zh": "你是否支持政府应该实施反垄断？",
            "en": "Should the government enforce antitrust laws?",
            "note": "在美国英语中，反垄断通常用 antitrust；enforce antitrust laws 是熟悉、自然的政策表达，术语参照 FTC 来源。把「你是否支持政府应该」整理成 Should the government… 问句，保留是否支持政府实施反垄断的判断；不指定美国某部法律，也不额外把主张改成拆分所有大企业。",
            "selected": false,
            "priority": false
          }
        ]
      },
      {
        "id": "Neoliberalism",
        "title": "结果",
        "sources": [
          "logical.js:1361"
        ],
        "notes": [],
        "entries": [
          {
            "id": "R14",
            "label": "结果",
            "zh": "你的意识形态是：新自由主义",
            "en": "Your result: Neoliberalism",
            "note": "Neoliberalism 就是新自由主义的英文名称，可以直接保留。不因用户选择支持经济全球化或反垄断而重新创造另一个结果名称，也不与 Classical Liberalism 合并。",
            "selected": false,
            "priority": false
          }
        ]
      },
      {
        "id": "ClassicalLiberalism",
        "title": "结果",
        "sources": [
          "logical.js:1365"
        ],
        "notes": [],
        "entries": [
          {
            "id": "R15",
            "label": "结果",
            "zh": "你的意识形态是：古典自由主义",
            "en": "Your result: Classical Liberalism",
            "note": "Classical Liberalism 是自然、准确的现成名称，直译合适。Classical 不能改成表示旧自由意志主义的 Paleo-，也不直接简化为 Liberalism。",
            "selected": false,
            "priority": false
          }
        ]
      },
      {
        "id": "Minarchism",
        "title": "结果",
        "sources": [
          "logical.js:1357"
        ],
        "notes": [],
        "entries": [
          {
            "id": "R16",
            "label": "结果",
            "zh": "你的意识形态是：小政府主义",
            "en": "Your result: Minarchism",
            "note": "这里是意识形态名称 Minarchism，而不只是口号式的 Small Government。沿用项目专名，不把有限政府的类别改成完全没有政府的 Anarchism；名称用法见 Stanford Encyclopedia of Philosophy。",
            "selected": false,
            "priority": false
          }
        ]
      },
      {
        "id": "nocurrencyissuance",
        "title": "你是否认为政府除了执行法律外不能有任何职责？",
        "sources": [
          "logical.js:83"
        ],
        "notes": [],
        "entries": [
          {
            "id": "Q15",
            "label": "题目",
            "zh": "你是否认为政府除了执行法律外不能有任何职责？",
            "en": "Should enforcing the law be the government’s only responsibility?",
            "note": "用 only responsibility 清楚保留「除了执行法律外不能有任何职责」这个排他条件。Enforcing the law 比把全部政府职责缩成 police work 更忠实；也不弱化成执行法律只是主要职责。",
            "selected": false,
            "priority": false
          }
        ]
      },
      {
        "id": "Voluntaryism",
        "title": "结果",
        "sources": [
          "logical.js:1345"
        ],
        "notes": [],
        "entries": [
          {
            "id": "R17",
            "label": "结果",
            "zh": "你的意识形态是：自愿主义",
            "en": "Your result: Voluntaryism",
            "note": "Voluntaryism 是这个政治思想标签的英文拼写，来源中的 The Voluntaryist 直接使用它。不能误写成表示志愿服务的一般概念 Volunteerism，也不因末级题干提到执法职责而自动改写结果分类。",
            "selected": false,
            "priority": true
          }
        ]
      },
      {
        "id": "outofenforcingthelaw",
        "title": "关于自由市场？",
        "sources": [
          "logical.js:94"
        ],
        "notes": [],
        "entries": [
          {
            "id": "Q16",
            "label": "题目",
            "zh": "关于自由市场？",
            "en": "Which statement best describes your view of the free market?",
            "note": "「关于自由市场？」在英文中缺少明确问法。结合两个陈述式选项，改为常见的 Which statement best describes your view…，让用户知道要选择更符合自己的描述。没有加入为什么必须支持市场的预设，也没有与前面询问支持程度的题目合并。",
            "selected": false,
            "priority": false
          },
          {
            "id": "Q16.1",
            "label": "选项 1",
            "zh": "这是最有效率的运行方式",
            "en": "It’s the most efficient way for an economy to function",
            "note": "The most efficient 保留「最有效率」这个最高程度。An economy 明确运行方式在自由市场语境中的对象，让英文句子完整；没有替原文增加最公平或每个人都最受益的判断。",
            "selected": false,
            "priority": false
          },
          {
            "id": "Q16.2",
            "label": "选项 2",
            "zh": "这是个人自由的体现",
            "en": "It’s an expression of individual freedom",
            "note": "An expression of individual freedom 就是「个人自由的体现」的自然英文，可以直接保留。没有改写成市场最有效率，仍与上一个选项所强调的理由区分。",
            "selected": false,
            "priority": false
          }
        ]
      },
      {
        "id": "Hayekism",
        "title": "结果",
        "sources": [
          "logical.js:1349"
        ],
        "notes": [],
        "entries": [
          {
            "id": "R18",
            "label": "结果",
            "zh": "你的意识形态是：哈耶克主义",
            "en": "Your result: Hayekism",
            "note": "沿用项目的 Hayekism 人名思想标签，Hayek 是哈耶克的英文姓氏。没有为了用更宽泛的经济学名称而改成 Austrian Economics，也没有把末级题中强调效率的选项写进结果名称。",
            "selected": false,
            "priority": false
          }
        ]
      },
      {
        "id": "Objectivism",
        "title": "结果",
        "sources": [
          "logical.js:1353"
        ],
        "notes": [],
        "entries": [
          {
            "id": "R19",
            "label": "结果",
            "zh": "你的意识形态是：客观主义",
            "en": "Your result: Objectivism",
            "note": "Objectivism 是这条政治思想路线中客观主义的名称；Ayn Rand Institute 的文本使用这一专名。不能误写成一般的 objectivity 或客观态度，也不根据单个自由市场选项改成更宽泛的自由主义。",
            "selected": false,
            "priority": false
          }
        ]
      }
    ],
    "references": [
      {
        "label": "Antitrust 用语 · 美国联邦贸易委员会",
        "url": "https://www.ftc.gov/enforcement/anticompetitive-practices"
      },
      {
        "label": "Human enhancement 用语 · Humanity+",
        "url": "https://www.humanityplus.org/the-transhumanist-manifesto"
      },
      {
        "label": "Libertarianism、Minarchism · Stanford Encyclopedia of Philosophy",
        "url": "https://plato.stanford.edu/entries/libertarianism/"
      },
      {
        "label": "Paleolibertarianism 名称 · Libertarianism.org",
        "url": "https://www.libertarianism.org/essay/what-is-libertarianism"
      },
      {
        "label": "Geolibertarianism · Fred Foldvary 原文",
        "url": "https://www.progress.org/articles/geo-libertarianism-gets-criticized/"
      },
      {
        "label": "Voluntaryism · Carl Watner / The Voluntaryist",
        "url": "https://voluntaryist.com/fundamentals/the-voluntaryist-spirit/"
      },
      {
        "label": "Hoppe 人名与思想语境 · 本人著作",
        "url": "https://hanshoppe.com/glr/"
      },
      {
        "label": "Objectivism 名称 · Ayn Rand Institute",
        "url": "https://aynrand.org/novels/objectivism-the-philosophy-of-ayn-rand/"
      },
      {
        "label": "Liberal Libertarians 用语 · Boettke / Candela 论文",
        "url": "https://www.rcandela.com/uploads/2/0/1/6/20163847/boettke_and_candela__2016__liberal_libertarians.pdf"
      },
      {
        "label": "Neoliberal Conservatism 用语 · Policy Press 研究著作",
        "url": "https://academic.oup.com/policy-press-scholarship-online/book/55414/chapter/436022459"
      },
      {
        "label": "Pink Capitalism 用语 · University Press of Florida 研究著作",
        "url": "https://academic.oup.com/florida-scholarship-online/book/15933/chapter-abstract/170856224"
      },
      {
        "label": "Social Libertarianism 名称 · Map My Politics 自身分类",
        "url": "https://www.mapmypolitics.org/ideology/social-libertarian.html"
      }
    ]
  },
  {
    "id": "personal-freedom-01",
    "archived": true,
    "title": "个人行为的自由：全部分支",
    "date": "2026-10-13",
    "scope": {
      "question": "shouldnot2",
      "options": [
        "1",
        "2",
        "3"
      ],
      "includeEntryQuestion": true
    },
    "copyRefs": {
      "shouldnot2": {
        "question": "personal-freedom-01/Q1",
        "options": {
          "1": "personal-freedom-01/Q1.1",
          "2": "personal-freedom-01/Q1.2",
          "3": "personal-freedom-01/Q1.3"
        }
      },
      "everthing": {
        "question": "personal-freedom-01/Q2",
        "options": {
          "1": "monarchism-01/Q6.1",
          "2": "integralism-01/Q4.2"
        }
      }
    },
    "resultRefs": {
      "AnarchoLiberalism": "personal-freedom-01/R1",
      "AnarchoNihilism": "personal-freedom-01/R2",
      "AnarchoCapitalism": "personal-freedom-01/R3",
      "Avaritionism": "personal-freedom-01/R4"
    },
    "sections": [
      {
        "id": "shouldnot2",
        "title": "对于个人行为的自由，你认为？",
        "sources": [
          "logical.js:215"
        ],
        "notes": [],
        "entries": [
          {
            "id": "Q1",
            "label": "题目",
            "zh": "对于个人行为的自由，你认为？",
            "en": "How much freedom should people have to do what they want?",
            "note": "结合三个选项，问题是在问个人行动的自由应有多大范围。用 do what they want 表达行为选择，读起来比 freedom of personal behavior 自然；How much freedom 保留对自由范围的判断，不预设一定需要限制，也不把题目改成只问言论、隐私或某一种权利。",
            "selected": false,
            "priority": false
          },
          {
            "id": "Q1.1",
            "label": "选项 1",
            "zh": "只要没有伤害、影响到他人人们可以做任何事",
            "en": "People should be free to do anything as long as it doesn’t harm or otherwise affect others",
            "note": "As long as 自然表达「只要」的条件；do anything 保留「任何事」的范围。Harm or otherwise affect 分别保留伤害与其他影响，otherwise 让英文避免两个动词简单堆叠。原文的「影响」没有限定为负面影响，因此不擅自缩成 harm others 或 negatively affect others。中文中「他人」与「人们」之间缺少标点，原文仍逐字保留。",
            "selected": false,
            "priority": true
          },
          {
            "id": "Q1.2",
            "label": "选项 2",
            "zh": "支持所有人做所有想做的事，但非常影响、伤害他人的事情不提倡",
            "en": "I support everyone’s freedom to do whatever they want, but I don’t encourage actions that seriously affect or harm others",
            "note": "前半句用 everyone’s freedom to do whatever they want 保留所有人的行动自由，后半句用 seriously 保留「非常」的程度。不提倡译为 don’t encourage，表示不鼓励这类行为；不加强为禁止、不得或应受惩罚。Affect 与 harm 均保留，不能把本选项改成第一项的「只有不影响他人才允许」，也不能改成第三项对伤害行为的接受。",
            "selected": false,
            "priority": true
          },
          {
            "id": "Q1.3",
            "label": "选项 3",
            "zh": "就算做伤害他人的事情也没问题",
            "en": "It’s okay for people to do what they want, even if it harms others",
            "note": "It’s okay 是美国英语里自然的「没问题」，even if 保留「就算」的让步关系。结合题干补出 people doing what they want 的行动自由语境，保留即使伤害他人也接受的立场；没有改成第二项的「不提倡」，也没有额外加入主动鼓励伤害、竞争获胜或报复等理由。",
            "selected": false,
            "priority": false
          }
        ]
      },
      {
        "id": "AnarchoLiberalism",
        "title": "结果",
        "sources": [
          "logical.js:1313"
        ],
        "notes": [],
        "entries": [
          {
            "id": "R1",
            "label": "结果",
            "zh": "你的意识形态是：无政府自由主义",
            "en": "Your result: Anarcho-Liberalism",
            "note": "Anarcho-Liberalism 对应中文名称与项目内部的 AnarchoLiberalism 节点；拆开连写的节点名并使用英文复合名称的连字符即可。保留这一结果的独立名称，不将它合并成另外已有的 Anarcho-Capitalism、Libertarianism 或 Liberalism。Your result: 沿用已审查的结果页语气。",
            "selected": false,
            "priority": false
          }
        ]
      },
      {
        "id": "everthing",
        "title": "你是否认为任何形式的宗教、法律、道德等等都是没有意义的",
        "sources": [
          "logical.js:228"
        ],
        "notes": [],
        "entries": [
          {
            "id": "Q2",
            "label": "题目",
            "zh": "你是否认为任何形式的宗教、法律、道德等等都是没有意义的",
            "en": "Do you think all forms of religion, law, morality, and similar systems are meaningless?",
            "note": "补成自然的完整问句；all forms 保留「任何形式」的全称范围，and similar systems 承接「等等」，避免逐字写 etc. 造成题目像未完成的列表。Meaningless 就能表达「没有意义」，这个直译可以保留；不改成 unnecessary、harmful 或 should be abolished，因为它们分别改变了必要性、危害性或制度主张。是／否复用已审查的 Yes、No。",
            "selected": false,
            "priority": false
          }
        ]
      },
      {
        "id": "AnarchoNihilism",
        "title": "结果",
        "sources": [
          "logical.js:1321"
        ],
        "notes": [],
        "entries": [
          {
            "id": "R2",
            "label": "结果",
            "zh": "你的意识形态是：无政府虚无主义",
            "en": "Your result: Anarcho-Nihilism",
            "note": "Anarcho-Nihilism 是已有的英文用语，Serafinski 的 Blessed is the Flame 原著也使用 anarcho-nihilism，直译合适。保留 anarcho- 部分，不缩成泛指的 Nihilism；这里只核对名称，不把外部著作的观点加入本项目的题目或分支。",
            "selected": false,
            "priority": false
          }
        ]
      },
      {
        "id": "AnarchoCapitalism",
        "title": "结果",
        "sources": [
          "logical.js:1325"
        ],
        "notes": [],
        "entries": [
          {
            "id": "R3",
            "label": "结果",
            "zh": "你的意识形态是：无政府资本主义",
            "en": "Your result: Anarcho-Capitalism",
            "note": "Anarcho-Capitalism 是对应的现成英文名称，可直接保留，拼写参照 Rothbard 的著作。没有必要为避免直译而另造称呼，也不把它换成更宽泛的 Free-Market Anarchism 或当前分支中的 Anarcho-Liberalism。",
            "selected": false,
            "priority": false
          }
        ]
      },
      {
        "id": "Avaritionism",
        "title": "结果",
        "sources": [
          "logical.js:1317",
          "Avaritionism_img.png"
        ],
        "notes": [],
        "entries": [
          {
            "id": "R4",
            "label": "结果",
            "zh": "你的意识形态是：自我达尔文主义",
            "en": "Your result: Avaritionism",
            "alternatives": [
              {
                "id": "ego-darwinism",
                "en": "Your result: Ego-Darwinism",
                "note": "Ego-Darwinism 是该名称的旧称，更直接保留中文「自我＋达尔文主义」的构成，让读者从名称中看到 ego 与 Darwinism 的组合。Avaritionism 与项目节点及图片文件名一致，也与来源页面的标题一致。两者是同一社区概念的不同名称，取舍在于沿用当前名称还是保留中文所用的旧称；不用 Self-Darwinism 另造一个英文词。"
              }
            ],
            "note": "本项目的节点与图片文件名指向 Avaritionism；Polcompball Wiki 将 Ego-Darwinism 列为它的旧称，与中文「自我达尔文主义」相对应，因此建议沿用 Avaritionism。该来源是网络社区的术语页，并将此概念标为虚构意识形态；这里只用来核对项目所用名称及别名，不把它当作公认政治学流派的证据。保留本项目的分类，不替换成已有的 Egoism 或 Social Darwinism。",
            "selected": false,
            "priority": true
          }
        ]
      }
    ],
    "references": [
      {
        "label": "Avaritionism 与 Ego-Darwinism 名称关系 · Polcompball Wiki（社区术语核对）",
        "url": "https://polcompball.wiki/Avaritionism"
      },
      {
        "label": "Anarcho-Nihilism 用语 · Serafinski / Blessed is the Flame",
        "url": "https://theanarchistlibrary.org/library/serafinski-blessed-is-the-flame.pdf"
      },
      {
        "label": "Anarcho-Capitalism 用语 · The Rothbard Reader / Mises Institute",
        "url": "https://cdn.mises.org/The%20Rothbard%20Reader.pdf"
      }
    ]
  },
  {
    "id": "means-of-production-01",
    "archived": true,
    "title": "生产资料：全部分支",
    "date": "2026-10-13",
    "scope": {
      "question": "should",
      "options": [
        "1",
        "2",
        "3"
      ],
      "includeEntryQuestion": true
    },
    "copyRefs": {
      "should": {
        "question": "social-democracy-01/Q4",
        "options": {
          "1": "social-democracy-01/Q4.1",
          "2": "social-democracy-01/Q4.2",
          "3": "social-democracy-01/Q4.3"
        }
      },
      "private": {
        "question": "social-democracy-01/Q5",
        "options": {
          "1": "social-democracy-01/Q5.1",
          "2": "social-democracy-01/Q5.2",
          "3": "social-democracy-01/Q5.3"
        }
      },
      "welfare": {
        "question": "social-democracy-01/Q6",
        "options": {
          "1": "social-democracy-01/Q6.1",
          "2": "social-democracy-01/Q6.2"
        }
      },
      "poor": {
        "question": "social-democracy-01/Q7",
        "options": {
          "1": "social-democracy-01/Q7.1",
          "2": "social-democracy-01/Q7.2"
        }
      },
      "public": {
        "question": "means-of-production-01/Q5",
        "options": {
          "1": "fascism-01/Q3.1",
          "2": "means-of-production-01/Q5.2",
          "3": "means-of-production-01/Q5.3"
        }
      },
      "worker": {
        "question": "means-of-production-01/Q6",
        "options": {
          "1": "monarchism-01/Q6.1",
          "2": "integralism-01/Q4.2"
        }
      },
      "minimum": {
        "question": "violence-retaliation-not-priority-01/Q1",
        "options": {
          "1": "means-of-production-01/Q7.1",
          "2": "means-of-production-01/Q7.2"
        }
      },
      "nominimum": {
        "question": "means-of-production-01/Q8",
        "options": {
          "1": "monarchism-01/Q6.1",
          "2": "integralism-01/Q4.2"
        }
      },
      "nobible": {
        "question": "means-of-production-01/Q9",
        "options": {
          "1": "means-of-production-01/Q9.1",
          "2": "means-of-production-01/Q9.2"
        }
      },
      "union": {
        "question": "means-of-production-01/Q10",
        "options": {
          "1": "economic-planned-01/Q10.1",
          "2": "means-of-production-01/Q10.2",
          "3": "means-of-production-01/Q10.3"
        }
      },
      "strike": {
        "question": "means-of-production-01/Q11",
        "options": {
          "1": "economic-planned-01/Q3.1",
          "2": "integralism-01/Q4.2"
        }
      }
    },
    "resultRefs": {
      "GreenLiberalism": "means-of-production-01/R1",
      "SocialDemocracy": "social-democracy-01/R1",
      "NordicModel": "means-of-production-01/R3",
      "Progressivism": "means-of-production-01/R4",
      "Georgism": "means-of-production-01/R5",
      "DemocraticSocialism": "means-of-production-01/R6",
      "LibertarianSocialism": "means-of-production-01/R7",
      "MinarchoSocialism": "means-of-production-01/R8",
      "ChristianSocialism": "means-of-production-01/R9",
      "MarketSocialism": "means-of-production-01/R10",
      "CouncilCommunism": "means-of-production-01/R11",
      "LiberalSocialism": "means-of-production-01/R12",
      "MonarchoSyndicalism": "means-of-production-01/R13",
      "Syndicalism": "means-of-production-01/R14",
      "UtopianSocialism": "means-of-production-01/R15",
      "Communalism": "means-of-production-01/R16"
    },
    "sourceVariants": {
      "union": {
        "options": {
          "1": {
            "zh": "通过民主途径",
            "note": "「通过民主途径」与此前的「民主途径」都是回答如何实现前述思想，直接复用 Through democratic means；仅增加「通过」不产生新的审查项。"
          }
        }
      },
      "strike": {
        "options": {
          "2": {
            "zh": "不需要",
            "note": "「不需要」在是否需要君主的完整问句下自然对应 No，与既有二选一问句中的「否」含义相同；保留当前中文作为内部来源变体，不重复提交。"
          }
        }
      }
    },
    "sections": [
      {
        "id": "public",
        "title": "那生产资料具体应该由谁掌控？",
        "sources": [
          "logical.js:298"
        ],
        "notes": [],
        "entries": [
          {
            "id": "Q5",
            "label": "题目",
            "zh": "那生产资料具体应该由谁掌控？",
            "en": "Who should control the means of production?",
            "note": "前一道题已明确选择公有，这里进一步询问由谁掌控。Who should control 是美国英语里自然的问法，control 保留实际控制而非仅提供建议的含义；不把三种选项都改写成国家所有，也不额外加入中央政府、企业董事会或其他制度。",
            "selected": false,
            "priority": false
          },
          {
            "id": "Q5.2",
            "label": "选项 2",
            "zh": "工人",
            "en": "Workers",
            "note": "工人直接译为 Workers 就自然，与 The state、Labor unions 并列。这里是由工人掌控生产资料，不擅自增加选举代表、所有权分配或某种企业制度的条件。",
            "selected": false,
            "priority": false
          },
          {
            "id": "Q5.3",
            "label": "选项 3",
            "zh": "工会（工团）",
            "en": "Labor unions",
            "note": "美国英语通常称工会为 labor unions；原文括号中的「工团」在本题中同样指劳动者的组织，无需把两个中文称呼机械写成两个英文组织。保留工会掌控生产资料的含义，不用容易被理解为商业联合体或犯罪团伙的 syndicates。与此前工团题的用词一致。",
            "selected": false,
            "priority": false
          }
        ]
      },
      {
        "id": "worker",
        "title": "政府的权利是否应该尽可能降到最低？",
        "sources": [
          "logical.js:335"
        ],
        "notes": [],
        "entries": [
          {
            "id": "Q6",
            "label": "题目",
            "zh": "政府的权利是否应该尽可能降到最低？",
            "en": "Should government power be reduced as much as possible?",
            "note": "结合工人掌控生产资料以及后续两个分支，此处「政府的权利」按政府权力理解，英文用 government power，而非政府自身享有的 rights。As much as possible 保留尽可能降到最低的程度，不改成仅减少官僚手续，也不加强为彻底废除政府。中文原文不修改，标为重点核对。",
            "selected": false,
            "priority": true
          }
        ]
      },
      {
        "id": "minimum",
        "title": "对于已经发生在了自己身上的暴力事件？",
        "sources": [
          "logical.js:346"
        ],
        "notes": [],
        "entries": [
          {
            "id": "Q7.1",
            "label": "选项 1",
            "zh": "用自己的武器反击（甚至报复）",
            "en": "Fight back with my own weapons (or even take revenge)",
            "note": "题干已说明是暴力发生在自己身上之后，选项用 my own weapons 保留自己的武器，用 or even take revenge 自然表达括号中更进一步的报复。本选项没有另一道同题干问题中的「强烈支持」，因此保留为不同文案；也不缩成只有自卫而丢掉报复的含义。",
            "selected": false,
            "priority": true
          },
          {
            "id": "Q7.2",
            "label": "选项 2",
            "zh": "寻找政府帮助",
            "en": "Seek help from the government",
            "note": "这句直接译成英文就自然。保留 government 的范围，不擅自缩成 call the police 或 go to court，因为原文没有指定向政府寻求帮助的具体途径。",
            "selected": false,
            "priority": false
          }
        ]
      },
      {
        "id": "nominimum",
        "title": "你是否认为社会主义是《圣经》所支持的？",
        "sources": [
          "logical.js:357"
        ],
        "notes": [],
        "entries": [
          {
            "id": "Q8",
            "label": "题目",
            "zh": "你是否认为社会主义是《圣经》所支持的？",
            "en": "Do you think the Bible supports socialism?",
            "note": "直译成这个完整问句自然清楚，the Bible 是美国英语中《圣经》的常用写法。问题询问读者是否认为圣经支持社会主义，不把它改成圣经是否要求社会主义，也不把宗教立场改为译者对经文的判断。",
            "selected": false,
            "priority": false
          }
        ]
      },
      {
        "id": "nobible",
        "title": "你认为工人的权利包括？",
        "sources": [
          "logical.js:368"
        ],
        "notes": [],
        "entries": [
          {
            "id": "Q9",
            "label": "题目",
            "zh": "你认为工人的权利包括？",
            "en": "Which rights should workers have?",
            "note": "结合两个选项，这是在问工人应当享有哪些权利，用 should 明确立场判断，避免被读成现行法律知识题。Workers 与前面的工人选项一致；不把权利仅限于薪酬、投票或企业所有权。",
            "selected": false,
            "priority": false
          },
          {
            "id": "Q9.1",
            "label": "选项 1",
            "zh": "他们可以完全控制公司并拿到分红",
            "en": "They should have full control over their company and receive a share of its profits",
            "note": "Full control 保留「完全控制」，a share of its profits 自然表达拿到分红，不必使用美国读者可能只联想到股票股息的 dividends。Should have 与题干询问应有权利相衔接；没有把控制弱化为参与咨询，也没有把利润分配改成固定工资或平均分配。",
            "selected": false,
            "priority": false
          },
          {
            "id": "Q9.2",
            "label": "选项 2",
            "zh": "他们的代表还需要直接掌权进行国家的决策",
            "en": "Their representatives should also exercise power directly and make decisions for the country",
            "note": "Their representatives 保留工人的代表，also 保留「还需要」这一进一步的要求。Exercise power directly 表示代表直接掌权，make decisions for the country 保留国家决策的范围；不弱化成仅向政府提建议，也不擅自补入独裁、政党或议会制度。",
            "selected": false,
            "priority": true
          }
        ]
      },
      {
        "id": "union",
        "title": "如何上述思想？",
        "sources": [
          "logical.js:311"
        ],
        "notes": [],
        "entries": [
          {
            "id": "Q10",
            "label": "题目",
            "zh": "如何上述思想？",
            "en": "How should these ideas be put into practice?",
            "note": "中文「如何上述思想？」缺少动词，原文逐字保留。结合民主途径、工会罢工和暂不考虑这三个选项，按「如何实现上述思想」理解；put into practice 是自然的英文表达。These ideas 指前面选定的公有及工会掌控，不替原题增加革命、选举或其他实现方式。",
            "selected": false,
            "priority": true
          },
          {
            "id": "Q10.2",
            "label": "选项 2",
            "zh": "通过工会罢工",
            "en": "Through union strikes",
            "note": "直接保留「通过工会罢工」的实现方式，union strikes 读起来自然。原文没有指定总罢工，也没有说必须暴力革命，因此不加 general、violent 或 revolutionary 等限定。",
            "selected": false,
            "priority": false
          },
          {
            "id": "Q10.3",
            "label": "选项 3",
            "zh": "我们暂时还不需要考虑这些",
            "en": "We don’t need to think about that yet",
            "note": "用 that 指回题干中的实现方式，让选项像自然的回答；yet 保留「暂时还不需要」的时间含义。没有改成永远不需要、拒绝实现这些思想或不确定是否支持。",
            "selected": false,
            "priority": false
          }
        ]
      },
      {
        "id": "strike",
        "title": "国家内需要一个君主吗？",
        "sources": [
          "logical.js:324"
        ],
        "notes": [],
        "entries": [
          {
            "id": "Q11",
            "label": "题目",
            "zh": "国家内需要一个君主吗？",
            "en": "Does the country need a monarch?",
            "note": "把原句写成完整的英语问句即可，monarch 自然涵盖国王、女王等君主。这里询问国家是否需要君主，没有原来另一道君主题中的「来统治国家」，因此不额外补入实际统治或绝对君权的条件。两个按钮沿用已审查的 Yes、No。",
            "selected": false,
            "priority": false
          }
        ]
      },
      {
        "id": "GreenLiberalism",
        "title": "结果",
        "sources": [
          "logical.js:1253"
        ],
        "notes": [],
        "entries": [
          {
            "id": "R1",
            "label": "结果",
            "zh": "你的意识形态是：绿色自由主义",
            "en": "Your result: Green Liberalism",
            "note": "Green Liberalism 直接保留「绿色自由主义」的两部分含义，与项目名称一致，英文名称自然。无需为了避免直译改成环境政策立场的泛称，也不换成 Green Politics 或 Eco-Socialism 等不同名称。",
            "selected": false,
            "priority": false
          }
        ]
      },
      {
        "id": "NordicModel",
        "title": "结果",
        "sources": [
          "logical.js:1269"
        ],
        "notes": [],
        "entries": [
          {
            "id": "R3",
            "label": "结果",
            "zh": "你的意识形态是：北欧模式",
            "en": "Your result: Nordic Model",
            "note": "Nordic Model 是「北欧模式」的现成英文名称，北欧合作机构的英文资料也这样称呼，可以直接保留。这里作为结果名称采用标题大小写，不把 model 另改为意识形态，也不缩窄成单一北欧国家的制度。",
            "selected": false,
            "priority": false
          }
        ]
      },
      {
        "id": "Progressivism",
        "title": "结果",
        "sources": [
          "logical.js:1261"
        ],
        "notes": [],
        "entries": [
          {
            "id": "R4",
            "label": "结果",
            "zh": "你的意识形态是：进步主义",
            "en": "Your result: Progressivism",
            "note": "Progressivism 是进步主义的自然英文名称，可直接保留。不给结果加入 American 或某个党派的限定，因为项目原文没有限定国家或政党。",
            "selected": false,
            "priority": false
          }
        ]
      },
      {
        "id": "Georgism",
        "title": "结果",
        "sources": [
          "logical.js:1257"
        ],
        "notes": [],
        "entries": [
          {
            "id": "R5",
            "label": "结果",
            "zh": "你的意识形态是：乔治主义",
            "en": "Your result: Georgism",
            "note": "Georgism 是乔治主义的英文专名，与项目节点一致。采用思想名称，保留它作为独立结果；不直译成 George-ism，也不换成范围更窄的某项土地税政策。",
            "selected": false,
            "priority": false
          }
        ]
      },
      {
        "id": "DemocraticSocialism",
        "title": "结果",
        "sources": [
          "logical.js:1273"
        ],
        "notes": [],
        "entries": [
          {
            "id": "R6",
            "label": "结果",
            "zh": "你的意识形态是：民主社会主义",
            "en": "Your result: Democratic Socialism",
            "note": "Democratic Socialism 直接对应民主社会主义，名称自然。保留它与已审查的 Social Democracy 的区别，不因这两个中文名称接近而互换。",
            "selected": false,
            "priority": false
          }
        ]
      },
      {
        "id": "LibertarianSocialism",
        "title": "结果",
        "sources": [
          "logical.js:1293"
        ],
        "notes": [],
        "entries": [
          {
            "id": "R7",
            "label": "结果",
            "zh": "你的意识形态是：自由意志社会主义",
            "en": "Your result: Libertarian Socialism",
            "note": "Libertarian Socialism 对应「自由意志社会主义」，与项目节点一致，可直接保留。这里的 Libertarian 不换成 Liberal；本轮还有独立的 Liberal Socialism 结果，两个名称及各自分支都保留。",
            "selected": false,
            "priority": false
          }
        ]
      },
      {
        "id": "MinarchoSocialism",
        "title": "结果",
        "sources": [
          "logical.js:1297"
        ],
        "notes": [],
        "entries": [
          {
            "id": "R8",
            "label": "结果",
            "zh": "你的意识形态是：小政府社会主义",
            "en": "Your result: Minarcho-Socialism",
            "note": "采用与项目名称一致的 Minarcho-Socialism，保留最小政府与社会主义的组合，而不是逐字造出 Small Government Socialism。Polcompball Wiki 自身的术语页使用这个名称，此处仅据它核对社区命名，不据其扩写本项目的政治主张，也不合并成 Libertarian Socialism。",
            "selected": false,
            "priority": true
          }
        ]
      },
      {
        "id": "ChristianSocialism",
        "title": "结果",
        "sources": [
          "logical.js:1301"
        ],
        "notes": [],
        "entries": [
          {
            "id": "R9",
            "label": "结果",
            "zh": "你的意识形态是：基督教社会主义",
            "en": "Your result: Christian Socialism",
            "note": "Christian Socialism 是基督教社会主义的自然英文名称，直译即可。原题问《圣经》是否支持社会主义，结果仍按中文原名呈现，不缩成 Biblical Socialism，也不补入某一宗派的限定。",
            "selected": false,
            "priority": false
          }
        ]
      },
      {
        "id": "MarketSocialism",
        "title": "结果",
        "sources": [
          "logical.js:1305"
        ],
        "notes": [],
        "entries": [
          {
            "id": "R10",
            "label": "结果",
            "zh": "你的意识形态是：市场社会主义",
            "en": "Your result: Market Socialism",
            "note": "Market Socialism 直接对应市场社会主义，保留名称。Market 与 Socialism 两部分都有意义，不改成资本主义或只谈劳资分红的政策标签；这里翻译项目给出的分类，不根据外部定义调整题目或分支。",
            "selected": false,
            "priority": false
          }
        ]
      },
      {
        "id": "CouncilCommunism",
        "title": "结果",
        "sources": [
          "logical.js:1309"
        ],
        "notes": [],
        "entries": [
          {
            "id": "R11",
            "label": "结果",
            "zh": "你的意识形态是：委员会共产主义",
            "en": "Your result: Council Communism",
            "note": "委员会共产主义的英文名称是 Council Communism，Paul Mattick 的原著标题也使用这一名称。这里的 council 指这一思想名称中的委员会，不机械写成 Committee Communism；不与共产主义的其他结果合并。",
            "selected": false,
            "priority": false
          }
        ]
      },
      {
        "id": "LiberalSocialism",
        "title": "结果",
        "sources": [
          "logical.js:1277"
        ],
        "notes": [],
        "entries": [
          {
            "id": "R12",
            "label": "结果",
            "zh": "你的意识形态是：自由社会主义",
            "en": "Your result: Liberal Socialism",
            "note": "按项目节点及中文「自由社会主义」采用 Liberal Socialism；Carlo Rosselli 著作的英文版也以此为书名。这里用 liberal，不用另一个结果中的 libertarian，保留项目中两种分类的区别；来源只用于核对名称，不把 Rosselli 的具体思想补进当前分支。",
            "selected": false,
            "priority": true
          }
        ]
      },
      {
        "id": "MonarchoSyndicalism",
        "title": "结果",
        "sources": [
          "logical.js:1285"
        ],
        "notes": [],
        "entries": [
          {
            "id": "R13",
            "label": "结果",
            "zh": "你的意识形态是：君主制工团主义",
            "en": "Your result: Monarcho-Syndicalism",
            "note": "Monarcho-Syndicalism 保留君主制与工团主义的组合，拼写与项目节点及 Polcompball Wiki 自身的术语页一致。前缀 Monarcho- 也与此前已采用的 Monarcho-Socialism 相协调；不补入绝对君主制、民族主义或反民主等本题没有明说的条件。社区来源仅用来核对这个组合名称。",
            "selected": false,
            "priority": false
          }
        ]
      },
      {
        "id": "Syndicalism",
        "title": "结果",
        "sources": [
          "logical.js:1289"
        ],
        "notes": [],
        "entries": [
          {
            "id": "R14",
            "label": "结果",
            "zh": "你的意识形态是：工团主义",
            "en": "Your result: Syndicalism",
            "note": "工团主义的思想名称使用 Syndicalism，而不是把名称改成泛指工会活动的 Unionism。选项中的劳动者组织可以自然写 labor unions，结果则保留对应的思想专名；两种写法各自适合所在语境。",
            "selected": false,
            "priority": false
          }
        ]
      },
      {
        "id": "UtopianSocialism",
        "title": "结果",
        "sources": [
          "logical.js:1281"
        ],
        "notes": [],
        "entries": [
          {
            "id": "R15",
            "label": "结果",
            "zh": "你的意识形态是：空想社会主义",
            "en": "Your result: Utopian Socialism",
            "note": "Utopian Socialism 是空想社会主义的现成英文名称，可直接保留。这里的 utopian 是名称组成部分，不额外加 unrealistic、naive 等评价，也不把原文改成对答题者的批评。",
            "selected": false,
            "priority": false
          }
        ]
      },
      {
        "id": "Communalism",
        "title": "结果",
        "sources": [
          "logical.js:1249"
        ],
        "notes": [],
        "entries": [
          {
            "id": "R16",
            "label": "结果",
            "zh": "你的意识形态是：公社主义",
            "en": "Your result: Communalism",
            "note": "采用与项目节点一致的 Communalism 对应公社主义，名称可以直接保留。保留该结果与其他共产主义及社区自治结果的区别，不因当前选项强调生活资料公有就自行改成 Communism，也不替题目增加某个理论家的制度主张。",
            "selected": false,
            "priority": false
          }
        ]
      }
    ],
    "references": [
      {
        "label": "Nordic Model 名称 · Nordic cooperation",
        "url": "https://www.norden.org/en/information/economy-nordic-region"
      },
      {
        "label": "Council Communism 名称 · Paul Mattick 原著",
        "url": "https://www.marxists.org/archive/mattick-paul/1939/council-communism.htm"
      },
      {
        "label": "Liberal Socialism 名称 · Carlo Rosselli / Princeton University Press 英文原著",
        "url": "https://api.pageplace.de/preview/DT0400.9781400887309_A29559351/preview-9781400887309_A29559351.pdf"
      },
      {
        "label": "Minarcho-Socialism 名称 · Polcompball Wiki（社区术语核对）",
        "url": "https://polcompball.wiki/Minarcho-Socialism"
      },
      {
        "label": "Monarcho-Syndicalism 名称 · Polcompball Wiki（社区术语核对）",
        "url": "https://polcompball.wiki/Monarcho-Syndicalism"
      }
    ]
  },
  {
    "id": "free-market-01",
    "title": "自由市场：全部分支",
    "date": "2026-10-13",
    "scope": {
      "question": "shouldnot",
      "options": [
        "1",
        "2"
      ],
      "includeEntryQuestion": true
    },
    "copyRefs": {
      "shouldnot": {
        "question": "free-market-01/Q1",
        "options": {
          "1": "monarchism-01/Q6.1",
          "2": "integralism-01/Q4.2"
        }
      },
      "free": {
        "question": "free-market-01/Q2",
        "options": {
          "1": "monarchism-01/Q6.1",
          "2": "integralism-01/Q4.2"
        }
      },
      "nofree": {
        "question": "free-market-01/Q3",
        "options": {
          "1": "fascism-01/Q3.3",
          "2": "free-market-01/Q3.2"
        }
      },
      "indiv": {
        "question": "free-market-01/Q4",
        "options": {
          "1": "monarchism-01/Q6.1",
          "2": "integralism-01/Q4.2"
        }
      },
      "socie": {
        "question": "free-market-01/Q5",
        "options": {
          "1": "monarchism-01/Q6.1",
          "2": "integralism-01/Q4.2"
        }
      },
      "noviol": {
        "question": "free-market-01/Q6",
        "options": {
          "1": "free-market-01/Q6.1",
          "2": "free-market-01/Q6.2"
        }
      },
      "key": {
        "question": "free-market-01/Q7",
        "options": {
          "1": "free-market-01/Q7.1",
          "2": "violence-retaliation-not-priority-01/Q1.2"
        }
      },
      "auxil": {
        "question": "free-market-01/Q8",
        "options": {
          "1": "free-market-01/Q8.1",
          "2": "free-market-01/Q8.2"
        }
      },
      "viol": {
        "question": "free-market-01/Q9",
        "options": {
          "1": "free-market-01/Q9.1",
          "2": "free-market-01/Q9.2",
          "3": "free-market-01/Q9.3"
        }
      }
    },
    "resultRefs": {
      "SyndicalistMutualism": "free-market-01/R1",
      "Mutualism": "free-market-01/R2",
      "AnarchoPrimitivism": "free-market-01/R3",
      "Egoism": "free-market-01/R4",
      "DemocraticConfederalism": "free-market-01/R5",
      "LibertarianMunicipalism": "free-market-01/R6",
      "Soulism": "free-market-01/R7",
      "AnarchoPacifism": "free-market-01/R8",
      "AnarchoSyndicalism": "free-market-01/R9",
      "SocialAnarchism": "free-market-01/R10",
      "AnarchoCommunism": "free-market-01/R11"
    },
    "sourceVariants": {
      "socie": {
        "options": {
          "1": {
            "zh": "是的",
            "note": "「是的」在 Do you oppose… 的二选一问句下与既有「是」一样对应 Yes，表示反对暴力革命；复用同一回答，不改变否定问句的分支方向。"
          },
          "2": {
            "zh": "不是",
            "note": "「不是」在该否定问句下表示不反对暴力革命，与既有「否」一样自然对应 No；复用同一回答，不将它理解为另一个肯定立场。"
          }
        }
      },
      "key": {
        "options": {
          "2": {
            "zh": "这个问题不是关注的重点",
            "note": "「这个问题不是关注的重点」与已通过的「这个问题不是重点」都表示当前议题并非判断立场时的优先事项，复用用户已采用的 This question isn’t a priority for me。未增加反对复国或无所谓的态度，不重复提交相同用法。"
          }
        }
      }
    },
    "sections": [
      {
        "id": "shouldnot",
        "title": "你是否支持在社会中应该有自由市场？",
        "sources": [
          "logical.js:379"
        ],
        "notes": [],
        "entries": [
          {
            "id": "Q1",
            "label": "题目",
            "zh": "你是否支持在社会中应该有自由市场？",
            "en": "Should society have a free market?",
            "note": "中文的「是否支持……应该有」包含两层问法。英文直接用 Should society have… 询问同一个立场，读起来像自然的美国问卷；保留 society 与 free market，不额外要求完全放任、不受监管或私有制。Yes、No 复用已通过的文案。",
            "selected": false,
            "priority": false
          }
        ]
      },
      {
        "id": "free",
        "title": "社会是否应该由多个工团（工会）组成？",
        "sources": [
          "logical.js:390"
        ],
        "notes": [],
        "entries": [
          {
            "id": "Q2",
            "label": "题目",
            "zh": "社会是否应该由多个工团（工会）组成？",
            "en": "Should society be organized into multiple labor unions?",
            "note": "Be organized into 比逐字写 be composed of 更适合询问社会如何组织，保留由多个组织组成的结构。工团在原文中用工会作解释，英文沿用已审查的 labor unions 及美国拼写 labor；不另加由工会统治、各行业各设一个工会等条件。",
            "selected": false,
            "priority": false
          }
        ]
      },
      {
        "id": "SyndicalistMutualism",
        "title": "你的意识形态是：工团互助主义",
        "sources": [
          "logical.js:1205"
        ],
        "notes": [],
        "entries": [
          {
            "id": "R1",
            "label": "结果",
            "zh": "你的意识形态是：工团互助主义",
            "en": "Your result: Syndicalist Mutualism",
            "note": "Syndicalist Mutualism 保留工团与互助主义的组合，并与项目内部的 SyndicalistMutualism 名称一致。这里采用项目的独立结果名称，不将它合并成普通 Mutualism，也不为了让名称更短省略工团这一限定。Your result: 沿用已通过的结果页表达。",
            "selected": false,
            "priority": false
          }
        ]
      },
      {
        "id": "Mutualism",
        "title": "你的意识形态是：互助主义",
        "sources": [
          "logical.js:1209"
        ],
        "notes": [],
        "entries": [
          {
            "id": "R2",
            "label": "结果",
            "zh": "你的意识形态是：互助主义",
            "en": "Your result: Mutualism",
            "note": "在这条自由市场分支中的互助主义对应 Mutualism，直接采用政治思想名称即可。不要改成普通的 mutual aid 或 mutual support，那会把结果名称变成日常互相帮助的描述。",
            "selected": false,
            "priority": false
          }
        ]
      },
      {
        "id": "nofree",
        "title": "个人和社会哪个更重要？",
        "sources": [
          "logical.js:401"
        ],
        "notes": [],
        "entries": [
          {
            "id": "Q3",
            "label": "题目",
            "zh": "个人和社会哪个更重要？",
            "en": "Which matters more: individuals or society?",
            "note": "Which matters more 是美国问卷中自然的价值比较问法，保留个人与社会之间的比较，不换成个人利益与国家利益。个人选项复用已通过的 Individuals：这一主体名词在这里也能自然指个人，不需要为它重新提交一条英文。",
            "selected": false,
            "priority": false
          },
          {
            "id": "Q3.2",
            "label": "选项 2",
            "zh": "社会",
            "en": "Society",
            "note": "Society 是此处社会的自然直译，与 Individuals 并列即可。不能换成 the state、the government 或 the community，后三者都会改变原题比较的对象。",
            "selected": false,
            "priority": false
          }
        ]
      },
      {
        "id": "indiv",
        "title": "你是否认为所有人类都应该回到石器时代才能实现上述思想？",
        "sources": [
          "logical.js:412"
        ],
        "notes": [],
        "entries": [
          {
            "id": "Q4",
            "label": "题目",
            "zh": "你是否认为所有人类都应该回到石器时代才能实现上述思想？",
            "en": "Do you believe all of humanity must return to the Stone Age to achieve these ideals?",
            "note": "All of humanity 保留「所有人类」的范围，must… to… 保留「才能实现」的必要条件，Stone Age 使用英语中自然的名称与大写。These ideals 承接前面讨论的思想；不改成只有愿意的人回归原始生活，也不把必须回到石器时代弱化成减少现代科技。",
            "selected": false,
            "priority": false
          }
        ]
      },
      {
        "id": "AnarchoPrimitivism",
        "title": "你的意识形态是：无政府原始主义",
        "sources": [
          "logical.js:1213"
        ],
        "notes": [],
        "entries": [
          {
            "id": "R3",
            "label": "结果",
            "zh": "你的意识形态是：无政府原始主义",
            "en": "Your result: Anarcho-Primitivism",
            "note": "Anarcho-Primitivism 对应无政府原始主义，也与项目的结果节点名称一致；英文复合名称使用连字符即可。保留无政府与原始主义两个部分，不改成范围更广的反技术思想。",
            "selected": false,
            "priority": false
          }
        ]
      },
      {
        "id": "Egoism",
        "title": "你的意识形态是：自我主义",
        "sources": [
          "logical.js:1217"
        ],
        "notes": [],
        "entries": [
          {
            "id": "R4",
            "label": "结果",
            "zh": "你的意识形态是：自我主义",
            "en": "Your result: Egoism",
            "note": "Egoism 是这里自我主义的思想名称，与前面重视个人的分支及 Egoism 节点一致。不能写成 egotism，后者通常指自负或自我吹嘘；也不与此前已通过的 Avaritionism 或 Anarcho-Nihilism 合并。",
            "selected": false,
            "priority": false
          }
        ]
      },
      {
        "id": "socie",
        "title": "你反对暴力革命吗？",
        "sources": [
          "logical.js:423"
        ],
        "notes": [],
        "entries": [
          {
            "id": "Q5",
            "label": "题目",
            "zh": "你反对暴力革命吗？",
            "en": "Do you oppose violent revolution?",
            "note": "这句直接译成 Do you oppose violent revolution? 就自然，无需为了本地化换问法。保留中文的否定方向：Yes 表示反对暴力革命，No 表示不反对；不能改成 Do you support… 后仍沿用原来的选项或分支。两种简短回答复用已通过的 Yes、No，中文「是的」「不是」另存内部来源变体。",
            "selected": false,
            "priority": false
          }
        ]
      },
      {
        "id": "noviol",
        "title": "你认为以社区和地方为单位的自治在实现社会变革中的作用是？",
        "sources": [
          "logical.js:447"
        ],
        "notes": [],
        "entries": [
          {
            "id": "Q6",
            "label": "题目",
            "zh": "你认为以社区和地方为单位的自治在实现社会变革中的作用是？",
            "en": "What role does self-governance at the community and local levels play in bringing about social change?",
            "note": "把中文的「作用是」整理为 What role does… play 的完整问句，更适合英文问卷，也保留对自治所起作用的判断。Self-governance 保留自治，at the community and local levels 保留社区和地方层级，bringing about social change 对应实现社会变革；不缩成只询问市政府的作用，也不增加必须通过选举的条件。",
            "selected": false,
            "priority": false
          },
          {
            "id": "Q6.1",
            "label": "选项 1",
            "zh": "关键性的",
            "en": "A key role",
            "note": "A key role 与题干的 What role… 直接衔接。Key 对应关键性，直译在这里自然；没有必要改成唯一途径或一切变革的前提，那会加强原选项。",
            "selected": false,
            "priority": false
          },
          {
            "id": "Q6.2",
            "label": "选项 2",
            "zh": "辅助性的",
            "en": "A supporting role",
            "note": "A supporting role 是英语中对辅助作用的自然表达，与 A key role 清楚并列。Supporting 表示有作用但居于辅助位置，不改成无关、没有作用或完全不重要。",
            "selected": false,
            "priority": false
          }
        ]
      },
      {
        "id": "key",
        "title": "关于犹太人复国你认为？",
        "sources": [
          "logical.js:458"
        ],
        "notes": [],
        "entries": [
          {
            "id": "Q7",
            "label": "题目",
            "zh": "关于犹太人复国你认为？",
            "en": "What do you think about the Jewish people reestablishing a state?",
            "note": "按中文逐字保留犹太人这一对象，并用 reestablishing a state 表达复国；不能只写 about Jews，也不直接换成 Zionism，以免把范围扩大成对整个运动的立场。原文没有指定现今某届政府或政策，英文也不补入。此题与后续结果的关联值得核对，但审查稿不据结果擅自改成其他民族或其他题目。",
            "selected": false,
            "priority": true
          },
          {
            "id": "Q7.1",
            "label": "选项 1",
            "zh": "如果他们要复国那至少应该使用合适的制度",
            "en": "If they want to reestablish a state, they should at least adopt a suitable system of government.",
            "note": "保留 if they want to… 的条件以及 at least 的最低要求。结合题干的复国语境，将制度理解为 system of government，避免把 system 留成无指向的词；中文没有指定哪一种政体，英文也不擅自补成民主邦联制、君主制或任何其他制度。",
            "selected": false,
            "priority": true
          }
        ]
      },
      {
        "id": "DemocraticConfederalism",
        "title": "你的意识形态是：民主邦联主义",
        "sources": [
          "logical.js:1233"
        ],
        "notes": [],
        "entries": [
          {
            "id": "R5",
            "label": "结果",
            "zh": "你的意识形态是：民主邦联主义",
            "en": "Your result: Democratic Confederalism",
            "note": "Democratic Confederalism 与中文民主邦联主义及项目节点名称一致，也是 Öcalan 本人著作使用的英文名称（术语来源见页面下方）。Confederalism 保留邦联，不换成 federalism 所指的联邦。来源仅用于核对名称，不据此改变前一道题的民族对象或答案连接。",
            "selected": false,
            "priority": false
          }
        ]
      },
      {
        "id": "LibertarianMunicipalism",
        "title": "你的意识形态是：Libertarian Municipalism (自由意志市政主义?)",
        "sources": [
          "logical.js:1237"
        ],
        "notes": [],
        "entries": [
          {
            "id": "R6",
            "label": "结果",
            "zh": "你的意识形态是：Libertarian Municipalism (自由意志市政主义?)",
            "en": "Your result: Libertarian Municipalism",
            "note": "原稿已给出 Libertarian Municipalism，Bookchin 本人的著作也使用这一名称（术语来源见页面下方），可以直接保留。括号中的中文译名与问号属于中文命名备注，英文结果无需重复这些备注；保留其独立名称，不与已通过的 Communalism 合并。",
            "selected": false,
            "priority": false
          }
        ]
      },
      {
        "id": "auxil",
        "title": "对于物理规律（重力、惯性等）？",
        "sources": [
          "logical.js:469"
        ],
        "notes": [],
        "entries": [
          {
            "id": "Q8",
            "label": "题目",
            "zh": "对于物理规律（重力、惯性等）？",
            "en": "What do you think about the laws of physics (gravity, inertia, etc.)?",
            "note": "中文题干是未完成的「对于……？」片段，英文补成 What do you think about… 的完整问句即可。Laws of physics 是物理规律的自然表达，保留重力、惯性和其他规律的范围；不能换成社会规则或法律。",
            "selected": false,
            "priority": false
          },
          {
            "id": "Q8.1",
            "label": "选项 1",
            "zh": "应该通过科技手段废除",
            "en": "We should use technology to abolish them.",
            "note": "Use technology 是通过科技手段的自然表达，them 明确承接物理规律。Abolish 保留原文刻意使用的「废除」及其夸张程度；不改成更现实但含义不同的研究、克服限制或减轻影响。",
            "selected": false,
            "priority": false
          },
          {
            "id": "Q8.2",
            "label": "选项 2",
            "zh": "啊？？？（不该废除/这不是重点）",
            "en": "Wait, what??? (We shouldn’t abolish them / This isn’t a priority.)",
            "note": "Wait, what??? 自然表达原文「啊？？？」的惊讶语气，保留原文的幽默。括号和斜杠继续并列不该废除、不是重点两种理由，仍是同一个选项；不把它们拆成两个答案，也不简化成只表示反对。",
            "selected": false,
            "priority": false
          }
        ]
      },
      {
        "id": "Soulism",
        "title": "你的意识形态是：灵魂主义",
        "sources": [
          "logical.js:1241"
        ],
        "notes": [],
        "entries": [
          {
            "id": "R7",
            "label": "结果",
            "zh": "你的意识形态是：灵魂主义",
            "en": "Your result: Soulism",
            "note": "结合 Soulism 节点和前面废除物理规律的选项，灵魂主义按本项目采用的 Soulism 名称处理，而非通常指灵媒或亡灵信仰的 Spiritualism。页面下方的 Polcompball Wiki 只作为这一社区名称及相关表述的来源核对，不将其当作学术分类依据，也不扩写新的思想定义。",
            "selected": false,
            "priority": true
          }
        ]
      },
      {
        "id": "AnarchoPacifism",
        "title": "你的意识形态是：无政府和平主义",
        "sources": [
          "logical.js:1245"
        ],
        "notes": [],
        "entries": [
          {
            "id": "R8",
            "label": "结果",
            "zh": "你的意识形态是：无政府和平主义",
            "en": "Your result: Anarcho-Pacifism",
            "note": "Anarcho-Pacifism 自然对应无政府和平主义，也与项目节点名称一致。Pacifism 保留和平主义的思想名称，不缩成 Peace 或 Nonviolence 这样的日常态度词，也不改成和平革命这一具体策略。",
            "selected": false,
            "priority": false
          }
        ]
      },
      {
        "id": "viol",
        "title": "在社会中被生产出来的资源应该如何分配？",
        "sources": [
          "logical.js:434"
        ],
        "notes": [],
        "entries": [
          {
            "id": "Q9",
            "label": "题目",
            "zh": "在社会中被生产出来的资源应该如何分配？",
            "en": "How should the resources produced in society be distributed?",
            "note": "这句按原文整理成完整问句就符合英文阅读习惯。Resources 保留资源的范围，不换成仅指收入的 income、利润的 profits 或商品的 goods；distributed 对应分配，与三个选项讨论的分配机制相衔接。",
            "selected": false,
            "priority": false
          },
          {
            "id": "Q9.1",
            "label": "选项 1",
            "zh": "主要通过工会的直接控制",
            "en": "Primarily under the direct control of labor unions",
            "note": "Under the direct control of 是英文中自然的控制关系，primarily 保留主要而非完全或唯一的程度。继续使用美国英语 labor unions；不弱化成工会提供建议，也不增加由国家代为管理的条件。",
            "selected": false,
            "priority": false
          },
          {
            "id": "Q9.2",
            "label": "选项 2",
            "zh": "通过社区与工会基于“各取所需”分配",
            "en": "Through communities and labor unions, according to need",
            "note": "According to need 自然表达各取所需的分配原则，不机械写成 everyone takes whatever they want。Through communities and labor unions 保留社区与工会作为分配途径；不改成平均分配，也不把两种组织中的一种删掉。",
            "selected": false,
            "priority": false
          },
          {
            "id": "Q9.3",
            "label": "选项 3",
            "zh": "基于“各取所需”且不通过社区与工会",
            "en": "According to need, without going through communities or labor unions",
            "note": "沿用上一选项的 according to need，让两者的差别集中在分配途径。Without going through… 保留不通过这些组织的条件，否定句中用 or 表示社区和工会都不作为途径；不扩大成禁止社区或工会存在。",
            "selected": false,
            "priority": false
          }
        ]
      },
      {
        "id": "AnarchoSyndicalism",
        "title": "你的意识形态是：无政府工团主义",
        "sources": [
          "logical.js:1221"
        ],
        "notes": [],
        "entries": [
          {
            "id": "R9",
            "label": "结果",
            "zh": "你的意识形态是：无政府工团主义",
            "en": "Your result: Anarcho-Syndicalism",
            "note": "无政府工团主义采用对应的 Anarcho-Syndicalism，保留无政府与工团主义两部分。题干中用 labor unions 解释组织名称，结果中则保留 syndicalism 这一思想名称；两者的用途不同，无需把结果改写成一长句。",
            "selected": false,
            "priority": false
          }
        ]
      },
      {
        "id": "SocialAnarchism",
        "title": "你的意识形态是：社会无政府主义",
        "sources": [
          "logical.js:1225"
        ],
        "notes": [],
        "entries": [
          {
            "id": "R10",
            "label": "结果",
            "zh": "你的意识形态是：社会无政府主义",
            "en": "Your result: Social Anarchism",
            "note": "Social Anarchism 是社会无政府主义的自然对应名称，与项目节点一致。Social 不能换成 socialist，也不将这个结果并入下一种 Anarcho-Communism；原项目把它们作为不同结果，英文继续保留这一区分。",
            "selected": false,
            "priority": false
          }
        ]
      },
      {
        "id": "AnarchoCommunism",
        "title": "你的意识形态是：无政府共产主义",
        "sources": [
          "logical.js:1229"
        ],
        "notes": [],
        "entries": [
          {
            "id": "R11",
            "label": "结果",
            "zh": "你的意识形态是：无政府共产主义",
            "en": "Your result: Anarcho-Communism",
            "note": "无政府共产主义采用对应的 Anarcho-Communism，直译自然，英文复合名称使用连字符即可。保留结果名称中的 communism，不替换为范围更广的 socialism，也不与 Social Anarchism 合并。",
            "selected": false,
            "priority": false
          }
        ]
      }
    ],
    "references": [
      {
        "label": "Libertarian Municipalism · Murray Bookchin 原著（术语核对）",
        "url": "https://theanarchistlibrary.org/library/murray-bookchin-theses-on-libertarian-municipalism"
      },
      {
        "label": "Democratic Confederalism · Abdullah Öcalan 原著（术语核对）",
        "url": "https://theanarchistlibrary.org/library/abdullah-ocalan-democratic-confederalism"
      },
      {
        "label": "Soulism · Polcompball Wiki（社区名称核对）",
        "url": "https://polcompball.wiki/Soulism"
      }
    ]
  }
];
