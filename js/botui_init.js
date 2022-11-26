function botui_init() {
    var botui = new BotUI("hello-akilar");
    botui.message.add({
      delay: 800,
      content: "Hi, 欢迎光临H4ckbirdの糖果屋😊"
    }).then(function() {
      botui.message.add({
        delay: 1100,
        content: "我是店长Akpigs😄"
      }).then(function() {
        botui.message.add({
          delay: 1100,
          content: "你也可以叫我菜猪~😋"
        }).then(function() {
          botui.action.button({
            delay: 1600,
            action: [{
              text: "我想知道更多关于H4ckbird's Blog的故事!😃",
              value: "sure"
            }, {
              text: "好的，就这样吧，拜拜！🙄",
              value: "skip"
            }]
          }).then(function(a) {
            "sure" == a.value && sure();
            "skip" == a.value && end()
          })
        })
      })
    });
    var sure = function() {
        botui.message.add({
          delay: 600,
          content: "🎉🎉🎉🎉🎉🎉"
        }).then(function() {
          secondpart()
        })
      },
      end = function() {
        botui.message.add({
          delay: 600,
          content: "w(ﾟДﾟ)w 不要走！再看看嘛！"
        })
      },
      secondpart = function() {
        botui.message.add({
          delay: 5000,
          content: "首先呢，很感谢您肯在这里驻足片刻❤️。H4ckbird是一个个人性质的博客，我会在这里发表各种各样的内容经历生活学习中的点点滴滴。"
        }).then(function() {
          botui.message.add({
            delay: 10000,
            content: "我希望通过这样的方式去激励鼓励自己，不要沉迷于低级趣味，摆烂是不可取的。"
          }).then(function() {
            botui.message.add({
              delay: 5000,
              content: "希望您能够喜欢小破站，没有做CDN等优化，所以会很卡。👀"
            }).then(function() {
              botui.message.add({
                delay: 8000,
                content: "如果可以希望你可以关注我的blog，这里会更新很多有趣的网络安全知识！🎉"
              }).then(function() {
                botui.message.add({
                  delay: 5000,
                  content: "标签栏都是精心处理过的，这里面都是自己的学习经历Note，总结走过的坑。😶"
                }).then(function() {
                  botui.message.add({
                    delay: 4000,
                    content: "CTFer中的一员，正在学习pwn👻"
                  }).then(function() {
                    botui.action.button({
                      delay: 1100,
                      action: [{
                        text: "传承开源精神🤔",
                        value: "why-mashiro"
                      }]
                    }).then(function(a) {
                      thirdpart()
                    })
                  })
                })
              })
            })
          })
        })
      },
      thirdpart = function() {
        botui.message.add({
          delay: 1e3,
          content: "😲，那英文名为什么叫H4ckbird呢？好奇怪啊，好牛逼的样子..."
        }).then(function() {
          botui.action.button({
            delay: 1500,
            action: [{
              text: "帐号太多了取名很随意的啦，很有Flag的风格",
              value: "why-cat"
            }]
          }).then(function(a) {
            fourthpart()
          })
        })
      },
      fourthpart = function() {
        botui.message.add({
          delay: 3000,
          content: "Advancing Knowledge. Transforming Lives; 以此为警惕，提醒自己不要把自己当一回事，山外有山人外有人。"
        }).then(function() {
          botui.message.add({
            delay: 3000,
            content: "灵感来自于刀剑神域~"
          }).then(function() {
            botui.action.button({
              delay: 1500,
              action: [{
                text: "方便透露一下真名吗？👀",
                value: "why-domain"
              }]
            }).then(function(a) {
              fifthpart()
            })
          })
        })
      },
      fifthpart = function() {
        botui.message.add({
          delay: 5000,
          content: "emmmm,流水幽吟绕耳边，煦风馨语抚心弦，挥臂欲揽冰钩月，银星斟酌醉人涎~"
        }).then(function() {
          botui.message.add({
            delay: 3000,
            content: "只是一介无名小卒而已^_^"
          })
        })
      }
  }