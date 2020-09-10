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

                // 之后给每个 li 绑定点击事件
                this.lis[i].addEventListener('click', this.toggleTab);

                // 给每个 li 右上角的关闭按钮注册事件
                this.closeButtons[i].addEventListener('click', this.closeTab);
            }

            // 给右上角 + 绑定事件
            this.add.addEventListener('click', this.addTab);
        }

        updateNodes() {
            this.lis = this.obj.querySelectorAll('li');
            this.sections = this.obj.querySelectorAll('section');
            this.closeButtons = this.obj.querySelectorAll('.icon-close');
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
        }

        // 删除 tab & section
        closeTab(e) {
            e.stopPropagation();
            console.log(this.parentNode.getAttribute('index'));
        }

    }

    // 实例化对象
    var tab = new Tab('#tab');
    // 声明一个变量用来存储生成的对象的 this
    var that;
})