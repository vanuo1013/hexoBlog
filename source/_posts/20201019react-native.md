---
title: React Native学习笔记
abbrlink: 1263558066
date: 2020-10-19 15:17:43
tags:
  - 前端
  - 移动端
  - React Native
categories:
  - [编程 || iconziyuan, 移动端 || iconziyuan]
cover: 
description: React Native学习笔记
---

# 环境配置

以Windows系统下开发Android应用所需的环境为例，Linux或iOS环境搭建请参考React-Native官网：https://reactnative.cn/docs/getting-started.html

1. 安装前端开发工具 VS Code：https://code.visualstudio.com/

2. 安装脚手架运行依赖的 Node.js（版本必须大于等于10）：https://nodejs.org/en/

3. 安装JS包管理工具 Yarn

  ```
  npm install yarn -g
  ```

4. 安装React Native命令行工具

  ```
  npm install react-native-cli -g
  ```

5. 安装JDK1.8

6. 安装Android Studio

7. 安装Python2

8. 安装安卓模拟器（可使用AS自带的AVD，也可安装第三方模拟器）

9. 创建React Native项目

  ```
  react-native init 项目名
  ```

10. 检查模拟器或手机进程是否存在

  ```
  adb devices
  adb kill-server
  adb start-server
  ```

11. RN项目启动命令

   ```
   yarn run android
   yarn run start
   ```



# 路由导航

+ 安装React Navigation核心包

  ```
  yarn add react-navigation react-native-gesture-handler react-native-reanimated react-native-screens
  ```

+ 顶部导航（页面切换）：createStackNavigator

  1. 安装顶部导航依赖包

     ```
     yarn add react-navigation-stack
     ```


+ 底部导航：createBottomTabNavigator

  1. 安装底部导航依赖包
  
    ```
    yarn add react-navigation-tabs
    ```
    
  2. 引入App容器和底部导航（React Navigation3.x以上版本导航必须在App容器内）
  
    ```javascript
    import {createAppContainer} from 'react-navigation';
    import {createBottomTabNavigator} from 'react-navigation-tabs';
    ```
    
  3. 引入导航跳转相应的页面组件（根据项目需求自行定义）
  
    ```javascript
    import HomeScreen from '../components/Home';
    import MineScreen from '../components/Mine';
    ```
    
  4. 配置底部导航栏
  
    ```javascript
    const TabNavigator = createBottomTabNavigator({
      Home: {
        screen: HomeScreen,
        navigationOptions: {
          tabBarLabel: "主页",
        },
      },
      Mine: {
        screen: MineScreen,
        navigationOptions: {
          tabBarLabel: "我的",
        },
      },
    });
    export default createAppContainer(TabNavigator);
    ```
  
+ 引导页：createSwitchNavigator



# 布局样式

React-Native 的样式基本上是实现了 CSS 的一个子集，并且属性名不完全一致。
外联布局：`style={styles.container}`
内联布局：`style={{flex:1,width:50,height:100}}`
多个布局：`style={[styles.container,{width:50,height:100}]}`

## Text 文本

| 属性名                      | 取值                                                  | 描述                                                         |
| --------------------------- | ----------------------------------------------------- | ------------------------------------------------------------ |
| color                       | color                                                 | 对应 CSS 中的 color 属性                                     |
| fontFamily                  | string                                                | 对应 CSS 中的 font-family 属性                               |
| fontSize                    | number                                                | 对应 CSS 中的 font-size 属性                                 |
| fontStyle                   | normal／italic                                        | 对应 CSS 中的 font-style 属性，但阉割了 oblique 取值          |
| fontWeight                  | normal／bold／100~900                                 | 对应 CSS 中的 font-weight 属性，但阉割了 bolder／lighter 取值 |
| lineHeight                  | number                                                | 对应 CSS 中的 line-height 属性                               |
| textAlign                   | auto／left／right／center／justify `iOS`              | 对应 CSS 中的 text-align 属性，增加了 auto 取值              |
| textAlignVertical `Android` | auto／top／bottom／center                             | 对应 CSS 中的 vertical-align 属性，增加了 auto 取值，center 取代了 middle，并阉割了 baseline／sub等值 |
| textShadowColor             | color                                                 | 对应 CSS 中的 text-shadow 属性中的颜色定义                   |
| textShadowOffset            | { width: number, height: number }                     | 对应 CSS 中的 text-shadow 属性中的阴影偏移定义               |
| textShadowRadius            | number                                                | 在 CSS 中，阴影的圆角大小取决于元素的圆角定义，不需要额外定义 |
| letterSpacing `iOS`         | number                                                | 对应 CSS 中的 letter-spacing 属性，但取值不同                |
| textDecorationColor `iOS`   | color                                                 | 对应 CSS 中的 text-decoration-color 属性                     |
| textDecorationLine `iOS`    | none／underline／line-through／underline line-through | 对应 CSS 中的 text-decoration-line 属性，但阉割了 overline／blink 取值 |
| textDecorationStyle `iOS`   | solid／double／dotted／dashed                         | 对应 CSS 中的 text-decoration-style 属性，但阉割了 wavy 取值 |
| writingDirection `iOS`      | auto／ltr／rtl                                        | 对应 CSS 中的 direction 属性，增加了 auto 取值               |

## Dimension 尺寸

| 属性名 | 取值   | 描述                      |
| ------ | ------ | ------------------------- |
| width  | number | 对应 CSS 中的 width 属性  |
| height | number | 对应 CSS 中的 height 属性 |

## Positioning 定位

| 属性名   | 取值               | 描述                                                     |
| -------- | ------------------ | -------------------------------------------------------- |
| position | absolute／relative | 对应 CSS 中的 position 属性，但阉割了 static, fixed 取值 |
| top      | number             | 对应 CSS 中的 top 属性                                   |
| right    | number             | 对应 CSS 中的 right 属性                                 |
| bottom   | number             | 对应 CSS 中的 bottom 属性                                |
| left     | number             | 对应 CSS 中的 left 属性                                  |

## Margin 外部

| 属性名           | 取值   | 描述                                                         |
| ---------------- | ------ | ------------------------------------------------------------ |
| margin           | number | 对应 CSS 中的 margin 属性，不过只能定义一个参数，表示上右下左4个方位的外补白 |
| marginHorizontal | number | CSS中没有对应的属性，相当于同时设置 marginRight 和 marginLeft |
| marginVertical   | number | CSS中没有对应的属性，相当于同时设置 marginTop 和 marginBottom |
| marginTop        | number | 对应 CSS 中的 margin-top 属性                                |
| marginRight      | number | 对应 CSS 中的 margin-right 属性                              |
| marginBottom     | number | 对应 CSS 中的 margin-bottom 属性                             |
| marginLeft       | number | 对应 CSS 中的 margin-left 属性                               |

## Padding 内部

| 属性名            | 取值   | 描述                                                         |
| ----------------- | ------ | ------------------------------------------------------------ |
| padding           | number | 对应 CSS 中的 padding 属性，不过只能定义一个参数，表示上右下左4个方位的内补白 |
| paddingHorizontal | number | CSS中没有对应的属性，相当于同时设置 paddingRight 和 paddingLeft |
| paddingVertical   | number | CSS中没有对应的属性，相当于同时设置 paddingTop 和 paddingBottom |
| paddingTop        | number | 对应 CSS 中的 padding-top 属性                                 |
| paddingRight      | number | 对应 CSS 中的 padding-right 属性                               |
| paddingBottom     | number | 对应 CSS 中的 padding-bottom 属性                              |
| paddingLeft       | number | 对应 CSS 中的 padding-left 属性                                |

## Border 边框

| 属性名                  | 取值                            | 描述                                                         |
| ----------------------- | ------------------------------- | ------------------------------------------------------------ |
| borderStyle             | solid／dotted／dashed           | 对应 CSS 中的 border-style 属性，但阉割了 none／hidden／double／groove／ridge／inset／outset 取值，且无方向分拆属性 |
| borderWidth             | number                          | 对应 CSS 中的 border-width 属性                              |
| borderTopWidth          | number                          | 对应 CSS 中的 border-top-width 属性                          |
| borderRightWidth        | number                          | 对应 CSS 中的 border-right-width 属性                        |
| borderBottomWidth       | number                          | 对应 CSS 中的 border-bottom-width 属性                       |
| borderLeftWidth         | number                          | 对应 CSS 中的 border-left-width 属性                         |
| borderColor             | color                           | 对应 CSS 中的 border-color 属性                              |
| borderTopColor          | color                           | 对应 CSS 中的 border-top-color 属性                          |
| borderRightColor        | color                           | 对应 CSS 中的 border-right-color 属性                        |
| borderBottomColor       | color                           | 对应 CSS 中的 border-bottom-color 属性                       |
| borderLeftColor         | color                           | 对应 CSS 中的 border-left-color 属性                         |
| borderRadius            | number                          | 对应 CSS 中的 border-radius 属性                             |
| borderTopLeftRadius     | number                          | 对应 CSS 中的 border-top-left-radius 属性                    |
| borderTopRightRadius    | number                          | 对应 CSS 中的 border-top-right-radius 属性                   |
| borderBottomLeftRadius  | number                          | 对应 CSS 中的 border-bottom-left-radius 属性                 |
| borderBottomRightRadius | number                          | 对应 CSS 中的 border-bottom-right-radius 属性                |
| shadowColor             | color                           | 对应 CSS 中的 box-shadow 属性中的颜色定义                    |
| shadowOffset            | {width: number, height: number} | 对应 CSS 中的 box-shadow 属性中的阴影偏移定义                |
| shadowRadius            | number                          | 在 CSS 中，阴影的圆角大小取决于元素的圆角定义，不需要额外定义 |
| shadowOpacity           | number                          | 对应 CSS 中的 box-shadow 属性中的阴影透明度定义              |

## Background 背景

| 属性名          | 取值  | 描述                                |
| --------------- | ----- | ----------------------------------- |
| backgroundColor | color | 对应 CSS 中的 background-color 属性 |

## Transform 转换

| 属性名             | 取值                                                         | 描述                                                       |
| ------------------ | ------------------------------------------------------------ | ---------------------------------------------------------- |
| transform          | [{perspective: number}, {rotate: string}, {rotateX: string}, {rotateY: string}, {rotateZ: string}, {scale: number}, {scaleX: number}, {scaleY: number}, {translateX: number}, {translateY: number}, {skewX: string}, {skewY: string}] | 对应 CSS 中的 transform 属性                               |
| transformMatrix    | TransformMatrixPropType                                      | 类似于 CSS 中 transform 属性的 matrix() 和 matrix3d() 函数 |
| backfaceVisibility | visible／hidden                                              | 对应 CSS 中的 backface-visibility 属性                     |

## Flexbox 弹性盒

| 属性名         | 取值                                                      | 描述                                                         |
| -------------- | --------------------------------------------------------- | ------------------------------------------------------------ |
| flex           | number                                                    | 对应 CSS 中的 flex 属性                                      |
| flexDirection  | row／column                                               | 对应 CSS 中的 flex-direction 属性，但阉割了 row-reverse／column-reverse 取值 |
| flexWrap       | wrap／nowrap                                              | 对应 CSS 中的 flex-wrap 属性，但阉割了 wrap-reverse 取值     |
| justifyContent | flex-start／flex-end／center／space-between／space-around | 对应 CSS 中的 justify-content 属性，但阉割了 stretch 取值    |
| alignItems     | flex-start／flex-end／center／stretch                     | 对应 CSS 中的 align-items 属性，但阉割了 baseline 取值       |
| alignSelf      | auto／flex-start／flex-end／center／stretch               | 对应 CSS 中的 align-self 属性，但阉割了 baseline 取值        |

## Other 其他

| 属性名                | 取值                    | 描述                                                          |
| --------------------- | ----------------------- | ------------------------------------------------------------- |
| opacity               | number                  | 对应 CSS 中的 opacity 属性                                    |
| overflow              | visible／hidden         | 对应 CSS 中的 overflow 属性，但阉割了 scroll／auto 取值        |
| elevation `Android`   | number                  | CSS中没有对应的属性，只在 Android5.0+ 上有效                   |
| resizeMode            | cover／contain／stretch | CSS中没有对应的属性，可以参考 background-size 属性             |
| overlayColor `Android`| string                  | CSS中没有对应的属性，当图像有圆角时，将角落都充满一种颜色       |
| tintColor `iOS`       | color                   | CSS中没有对应的属性，iOS 图像上特殊的色彩，改变不透明像素的颜色 |

## Color 颜色

React-Native 支持了 CSS 中大部分的颜色类型：
+ `#f00` (#rgb)
+ `#f00c` (#rgba)：CSS 中无对应的值
+ `#ff0000` (#rrggbb)
+ `#ff0000cc` (#rrggbbaa)：CSS 中无对应的值
+ `rgb(255, 0, 0)`
+ `rgba(255, 0, 0, 0.9)`
+ `hsl(360, 100%, 100%)`
+ `hsla(360, 100%, 100%, 0.9)`
+ `transparent`
+ Color Name：支持了 基本颜色关键字 和 拓展颜色关键字，但不支持 28个系统颜色；

## Pt 单位

在 React-Native 中，目前仅支持 Number 这一种长度取值，并不支持百分比单位，目前只支持 pt 绝对长度单位，定义时不需要加单位。



# 字体图标

https://juejin.im/post/5ae1685bf265da0b8a675199#heading-6

## 第三方图标库

1. 安装依赖包

   ```
   yarn add react-native-vector-icons
   ```

2. 自动链接，关联成功会在`android/app/src/main/assets/fonts`和`ios`中生成字体文件及配置

   ```
   react-native link react-native-vector-icons
   ```

3. 引入第三方字体图标库

   ```javascript
   import Icon from 'react-native-vector-icons/FontAwesome';
   ```

4. 可用的图标名参考https://oblador.github.io/react-native-vector-icons/

5. 使用方式

   + 以标签形式使用

     ```html
     <Icon name={'home'} size={24} color={'#999'} />
     ```

   + 在底部导航中使用

     ```json
     Home: {
       screen: HomeScreen,
       navigationOptions: {
         tabBarLabel: '主页',
         tabBarIcon: ({tintColor}) => {
           return <Icon name={'home'} size={24} color={tintColor} />;
         },
       },
     }
     ```

   + 在按钮中使用

     ```html
     <Icon.Button name="star" backgroundColor="#999999" onPress={this.starOnGithub}>Give me a star on Github</Icon.Button>
     ```

## 自定义图标库

1. 图标需上传至iconfont阿里矢量图标库，或选中图标添加至购物车下载代码

2. 解压后将iconfont.ttf文件复制到`android/app/src/main/assets/fonts`目录中，并在`build.gradle`文件中添加如下配置

   ```
   project.ext.vectoricons = [
     iconFontNames: [ 'iconfont.ttf' ]
   ]
   ```


3. iOS需要创建Fonts文件夹并添加到工程中，将iconfont.ttf放入其中，在Info.plist中Fonts provided by application下添加一行iconfont.ttf

4. 以Text组件设置unicode字符的形式使用，fontFamily要设置为iconfont

   ```html
   <Text style={{fontFamily: 'iconfont', fontSize: 20, color: 'red'}}>&#xe6e9;</Text>
   ```

5. 在底部导航中使用

   ```json
   Mine: {
       screen: MineScreen,
       navigationOptions: {
         tabBarLabel: '我的',
         tabBarIcon: ({tintColor}) => {
           return (
             <Text
               style={{fontFamily: 'iconfont', fontSize: 20, color: tintColor}}>
               &#xe6eb;
             </Text>
           );
         },
       },
   }
   ```

6. 可用的unicode参考iconfont下载代码解压后的demo_index.html文件，使用数组循环批量显示时需要对unicode进行格式转换，如`&#xe6a7;`转成`\ue6a7`



# 请求通讯

在APP应用中安全机制与网页环境有所不同，没有跨域的限制，React Native中已经内置了ajaxAPI，因此可以使用基于此API封装的第三方请求库，如Axios（JQuery除外），但建议使用fetchAPI，该方法会返回Promise。

+ GET请求

  ```javascript
  fetch("https://facebook.github.io/react-native/movies.json")
    .then((response) => response.json())
    .then((responseJson) => {
      console.error(responseJson.movies);
    })
    .catch((error) => {
      console.error(error);
    });
  ```

+ POST请求

  ```javascript
  fetch("https://mywebsite.com/endpoint/", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      firstParam: "yourValue",
      secondParam: "yourOtherValue",
    })
      .then((response) => response.json())
      .then((responseJson) => {
        console.error(responseJson);
      })
      .catch((error) => {
        console.error(error);
      }),
  });
  ```

+ 组件加载完毕后，一般在componentDidMount这个生命周期中向服务器请求初始数据

  ```javascript
  constructor(props) {
      super(props);   //这一句不能省略，照抄即可
      this.state = {
          movies: null,  //放自定义的state变量及初始值
      };
      // 在ES6中，如果在自定义的函数里使用了this关键字，则需要对其进行“绑定”操作，否则this的指向不对
      this.fetchData = this.fetchData.bind(this);
  },
  componentDidMount() {
      this.fetchData();
  },
  fetchData() {
      fetch(REQUEST_URL)
      .then((response) => response.json())
      .then((responseData) => {
          // 这里使用了this关键字，为保证this在调用时仍然指向当前组件，我们需要对其进行“绑定”操作
          this.setState({
              movies: responseData.movies,
          });
      });
  }
  ```



# 生命周期

## 初始化

1. getDefaultProps：组件实例创建前调用，多个实例间共享引用。全局调用一次，组件自己不可以修改props，只可由其他组件调用它时在外部进行修改。
2. getInitalState：组件实例创建的时候调用的第一个函数。主要用于初始化state。为了在使用中不出现空值，建议初始化state的时候尽可能给每一个可能用到的值都赋一个初始值。
3. componentWillMount：仅调用一次，可用于改变state操作。
4. render：组件渲染函数，会返回一个虚拟DOM，只允许返回一个最外层容器组件。render函数尽量保持纯净，只渲染组件，不修改状态，不执行副操作（比如计时器）。
5. componentDidMount：在render渲染之后，会根据虚拟DOM来生成真实DOM，生成完毕后会调用该函数。主要在该函数中执行网络请求，定时器开启等相关操作。

## 运行中

6. componentWillReceiveProps(nextProps)：props改变（父容器来更改或是redux），将会调用该函数。新的props将会作为参数传递进来，老的props可以根据this.props来获取。我们可以在该函数中对state作一些处理。在该函数中更新state不会引起二次渲染。
7. shouldComponentUpdate(object nextProps, object nextState)：该函数传递过来两个参数，新的state和新的props。state和props的改变都会调到该函数。该函数主要对传递过来的nextProps和nextState作判断。如果返回true则重新渲染，如果返回false则不重新渲染。在某些特定条件下，我们可以根据传递过来的props和state来选择更新或者不更新，从而提高效率。
8. componentWillUpdate(object nextProps, object nextState)：和componentWillMount类似，组件接收到新的props或者state渲染前调用该方法。但是不能在该方法中更新state和props。
9. render：跟初始化的时候功能一样。
10. componentDidUpdate(object prevProps,object prevState)：和componentDidMount类似，在render之后，真实DOM生成之后调用该函数。传递过来的是当前的props和state。如果需要在运行中执行某些副操作，可在该函数中完成。

## 销毁时

11. componentWillUnmount：组件DOM移除时调用。可在这里进行销毁定时器，监听等操作。



# Webview

1. 安装依赖

   ```
   yarn add react-native-webview
   ```

2. 自动链接

   ```
   react-native link react-native-webview
   ```

3. 页面中引入

   ```javascript
   import {WebView} from 'react-native-webview';
   ```



# 修改图标应用名

+ Android：

  + 图标:
    将logo拖到app icon gear中 生成四个规格的图标，分别放到`android/app/src/main/res`下的四个文件夹中，命名为ic_launcher.png没有对应上的文件夹放一张1024x1024或者512x512的即可
  + app名称:
    在`android/app/src/main/res/values/strings.xml`中更改


+ iOS:

  + 图标:
      xcode > 根目录 > Images.xcassets 将生成的图标拖入对应的位置
  + app名称:
      xcode > 根目录 > Info.plist 中修改 Bundlename 和 General > DIsplay Name

  

# 条件渲染与组件传值

由于页面跳转错误的使用了createSwitchNavigator方法，导致浏览器A页面跳转至二维码B页面时，A页面就会销毁，从B页面跳转回A页面将重新渲染，从而失去浏览器历史，即使在跳转前保存A页面的浏览器路径，A页面重新渲染时直接给webview赋值该路径，也无法在webview中进行页面后退。
**该问题将createSwitchNavigator改为createStackNavigator即可解决。**
但没有发现页面跳转方式错误时，使用了以下不进行页面跳转，转而使用条件渲染的解决方式，缺点在于二维码组件必须使用定位使其浮与webview上方，并且标签要插入在webview之后，确保显示时能覆盖住webview不会造成布局错乱，而且将来若组件增加，使用该方法可能会影响性能。

1. 在webview页面引入二维码组件

   ```javascript
   import React, {Component} from 'react';
   import {StyleSheet, Text, View, Platform, BackHandler} from 'react-native';
   import {ActionButton, QRCode} from '../elements/ui';
   import {WebView} from 'react-native-webview';
   ```

2. 在state中定义开关变量

   ```javascript
   constructor(props) {
       super(props);
       this.state = {
           webUrl: WEB_URL,
           scalesPageToFit: false,
           showQRCode: false,
       };
   }
   ```

3. 在具体事件中触发调整二维码组件的开关显示，此处根据H5页面传递的字符串判断触发什么事件

   ```javascript
   case 'QRCode':
      this.setState({
         showQRCode: true,
      });
      break;
   ```

4. 渲染时根据state中的开关状态决定是否显示二维码组件，并且给接收子组件传值的自定义事件绑定this

   ```javascript
   render() {
       let userMessage;
       const {showQRCode} = this.state;
       if (showQRCode) {
           userMessage = <QRCode _showQRCode={this._showQRCode.bind(this)} />;
       }
       return (
           <View style={styles.view}>
               <WebView ref={WEB_VIEW_REF} source={{uri: this.state.webUrl}} />
               {userMessage}
           </View>
       );
   }
   ```

5. 定义事件接收二维码子组件传递的值，子组件传来识别出的二维码数据则关闭组件开关不显示

   ```javascript
   _showQRCode(showQRCode, data) {
       this.setState({
           showQRCode: showQRCode,
       });
       console.log(data);
   }
   ```

6. 子组件在特定事件中给父组件传值，此处为识别二维码事件

   ```javascript
   onBarCodeRead = (result) => {
       const { data } = result;
       const showQRCode = false;
       this.props._showQRCode(showQRCode, data);
   };
   ```




# 签名打包

+ Android（使用Android Studio打包）

  1. 用Android Studio打开RN项目中的android目录，

+ iOS



#   Detox

detox build -c windows.android.emu.release
detox test -c windows.android.emu.release E:/sunline/gitlab/Granada-dev/e2e/bankingTest.spec.js



cd C:\Users\Lenovo\AppData\Local\Android\Sdk\platform-tools
adb reverse tcp:8081 tcp:8081，在app里调出调试菜单点reload



react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res