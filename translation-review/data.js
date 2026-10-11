// 审查内容。追加批次时保留已有 batch.id、section.id、entry.id。
window.REVIEW_BATCHES = [
  {
    "id": "social-democracy-01",
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
            "en": "Where Do You Stand?",
            "alternatives": [
              {
                "id": "descriptive-title",
                "en": "Political Ideology Quiz",
                "note": "现稿像一个邀请用户思考自身立场的产品名称；这版直接说明测试主题，让初次访问的人更快知道网站用途。两者都适合，区别在命名方式。选定后，测试页和浏览器标签页应使用同一个名称。"
              }
            ],
            "note": "沿用现有英文标题的提问方向，并把当前的 “Where You Stand?” 调整为完整问句。现稿和另一种直述主题的名称都自然，没有必要只为避免直译而放弃后者。",
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
            "en": "Both the means of production and goods for personal use should be publicly owned",
            "note": "",
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
            "en": "A smiling red character holding a bouquet of roses",
            "note": "已查看当前结果图，改为描述图中实际可见的内容。此项是对已有英文替代文本的改进建议，不是从项目中提取的中文翻译。",
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
      }
    ]
  }
];
