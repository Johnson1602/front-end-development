window.addEventListener('load', function () {
    // 创建一个 Tab 类
    class Tab {
        // 构造函数，参数用来接收要进行操作的对象的 id 值
        constructor(id) {
            that = this;

            this.obj = document.querySelector(id);
            // console.log(this.obj);
            // 获取右上角 +
            this.add = this.obj.querySelector('.tabadd');
            // 获取 li 的父节点 ul
            this.ul = this.obj.querySelector('ul');
            // section 的父节点 tabscon
            this.tabscon = this.obj.querySelector('.tabscon');
            // 记录当先选中的是哪个一个选项卡（tab）
            this.currentTab = 0;
            // console.log(this.currentTab);

            // 初始化
            this.init();
        }

        // 当页面加载 & 新增标签 时进行初始化
        init() {
            // 因为要操作 tab 栏中的 li 以及他们对应的 section，所以先获取
            // 刷新 tab & section
            this.updateNodes();

            // 给 li 绑定 click 事件
            for (var i = 0; i < this.lis.length; i++) {
                // 先给每个 li 添加自定义属性 index，用于识别之后被点击的是谁
                this.lis[i].setAttribute('index', i);
                // console.log(this.lis[i].getAttribute('index'));

                // 1. 之后给每个 li 绑定点击切换事件
                this.lis[i].addEventListener('click', this.toggleTab);

                // 3. 给每个 li 右上角的关闭按钮注册事件
                this.closeButtons[i].addEventListener('click', this.closeTab);

                // 4. 双击可以进行编辑
                this.tabs[i].addEventListener('dblclick', this.editTab);
                this.sections[i].addEventListener('dblclick', this.editTab);
            }

            // 2. 给右上角 + 绑定事件
            this.add.addEventListener('click', this.addTab);
        }

        updateNodes() {
            this.lis = this.obj.querySelectorAll('li');
            this.sections = this.obj.querySelectorAll('section');
            this.closeButtons = this.obj.querySelectorAll('.icon-close');
            this.tabs = this.obj.querySelectorAll('.firstnav ul li span:first-child');
        }

        // 使用排他思想清除样式
        clearStyle() {
            for (var i = 0; i < this.lis.length; i++) {
                this.lis[i].className = '';
                this.sections[i].className = '';
            }
        }

        // 切换 tab & section
        toggleTab() {
            that.clearStyle();
            this.className = 'liactive';
            that.sections[this.getAttribute('index')].className = 'conactive';

            // 更新当前选中的选项卡
            that.currentTab = this.getAttribute('index');
            // console.log('toggle! current tab: ' + that.currentTab);
        }

        // 添加新的 tab & section
        addTab() {
            that.clearStyle();
            // 创建新的 li & section，并插入到 ul / div 末尾
            var li = '<li class="liactive"><span>新选项卡</span><span class="iconfont icon-close"></span></li>';
            var random = Math.random();
            var section = '<section class="conactive">新标签页 ' + random + '</section>';
            that.ul.insertAdjacentHTML('beforeend', li);
            that.tabscon.insertAdjacentHTML('beforeend', section);
            that.init();

            // 更新当前选中的选项卡
            that.currentTab = that.lis.length - 1;
            // console.log('add! current tab: ' + that.currentTab);
        }

        // 删除 tab & section
        closeTab(e) {
            // 阻止冒泡（li 也有 click 事件）
            e.stopPropagation();
            var index = this.parentNode.getAttribute('index');
            // console.log(index);

            that.lis[index].remove();
            that.sections[index].remove();

            // 删除之后更新 tab & section
            that.init();

            // 如果删除的是处于选定状态的 tab，那么将自动选定其上一个 tab，否则不变
            // 使用鼠标模拟点击动作指定选定操作
            if (index == that.currentTab) {
                if (index == 0) {
                    if (that.lis.length > 0) {
                        that.currentTab = 0;
                        that.lis[0].click();
                    } else {
                        that.currentTab = -1;
                    }
                } else {
                    that.currentTab = --index;
                    // console.log('close! current tab: ' + that.currentTab);
                    that.lis[index] && that.lis[index].click();    
                }
            }

            // 上面那种通过判断删除的是否为当前选定的选项卡的方法有点麻烦
            // 更简单的方法是：删除之后判断一下当前是否还有选中的选项卡，如果还有的话那么就不需要做操作，实现代码如下
            // if (document.querySelector('.liactive')) {
            //     return;
            // }
        }

        // 双击编辑
        editTab() {
            // 先禁用双击选中
            window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();

            var text = this.innerHTML;
            this.innerHTML = '<input type="text">';

            // 获取这个新生成的输入框
            var input = this.children[0];
            input.value = text;

            // 当进入编辑模式时，直接选中所有文字
            input.select();

            // 退出编辑模式将输入的文字赋值给 tab
            input.addEventListener('blur', function () {
                this.parentNode.innerHTML = this.value;
            })
            input.addEventListener('keyup', function (e) {
                // 如果敲回车也可以确定修改
                if (e.keyCode == 13) {
                    // 手动调用 blur 效果
                    this.blur();
                }
            })
        }
    }

    // 实例化对象
    var tab = new Tab('#tab');
    // 声明一个变量用来存储生成的对象的 this
    var that;
})