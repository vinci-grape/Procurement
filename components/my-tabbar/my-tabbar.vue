<template>
    <cover-view class="uni-tabbar">
        <cover-view class="uni-tabbar__item" v-for="(item, index) in tabbar" :key="index" @tap="changeTab(item)">
            <cover-view class="uni-tabbar__bd">
                <cover-view class="uni-tabbar__icon">
                    <cover-image v-if="item.pagePath == pagePath" class="icon-img" mode="aspectFit" :src="item.selectedIconPath"></cover-image>
                    <cover-image v-else class="icon-img" mode="aspectFit" :src="item.iconPath"></cover-image>
                </cover-view>
            </cover-view>
            <cover-view class="uni-tabbar__label" :class="{ active: item.pagePath == pagePath }">{{ item.text }}</cover-view>
        </cover-view>
    </cover-view>
</template>

<script>
export default {
    props: {
        pagePath: String
    },
    data() {
        return {
            page: 'contact',
            showPage: false,
            containerHeight: 400,
            group_id: null,
            ppkk: false,
            tabbar: [
                //动态切换的菜单，先隐藏，动态插入
                {
                    pagePath: '/pages/user/user',
                    iconPath: '/static/user-manager.png',
                    selectedIconPath: '/static/user-manager-select.png',
                    text: '用户管理'
                },
                {
					pagePath: '/pages/management/management',
                    iconPath: '/static/images/tabBar/member.png',
                    selectedIconPath: '/static/images/tabBar/member-a.png',
                    text: '个人'
                },
                {
                    pagePath: '/pages/order/order',
                    iconPath: '/static/user.png',
                    selectedIconPath: '/static/user-select.png',
                    text: '我的'
                },
            ]
        };
    },
    watch: {
        pagePath: {
            handler(val) {
                // console.log('pagePath监听===val', val);
            },
            immediate: true
        }
    },
    onShow() {
       
    },
    created() {
       // 根据自己的业务需求判断条件，替换即可
       let qx = uni.getStorageSync('group_id');
	   qx = 1;
       console.log('当前用户权限等级为:' + qx);
       if (qx === 1) {
		   this.tabbar.splice(1,1);
       } else if(qx === 4) {
		   this.tabbar.splice(0,1);
       } else if(qx >= 5) {
           this.tabbar.splice(1,1);
       }
    },
    onLoad() {},
    mounted() {},
    methods: {
        changeTab(item) {
            console.log(item)
            this.page = item.pagePath;
            const token = uni.getStorageSync('token');
            if (!token) {
               uni.reLaunch({
                   url: '/pages/index/index',
               });
            }
            // 使用reLaunch关闭所有的页面，打开新的栏目页面
            uni.switchTab({
                url: this.page,
                success(e) {
                    var page = getCurrentPages().pop();
                    if (page == undefined || page == null) return;
                    page.onLoad();
                }
            });
            // 切忌:勿用switchTab 方式 跳转  :原因-去看看 switchTab 方式跳转做了什么
        }
    }
};
</script>

<style lang="scss" scoped>
.uni-tabbar {
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 999;
    width: 100%;
    display: flex;
    justify-content: space-around;
    height: 110rpx;
    // padding: 20rpx 0;
    box-sizing: border-box;
    border-top: solid 1upx #fff;
    background-color: #fff;
    box-shadow: 0px 0px 17upx 1upx rgba(206, 206, 206, 0.32);

    .uni-tabbar__item {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        align-content: space-around;
        font-size: 26rpx;
        text-align: center;
        width: 100%;
        // background-color: #0EA391;
        // opacity: 0.3;
        margin: 1rpx;
    }

    .uni-tabbar__icon {
        width: 100%;
        display: flex;
        justify-content: center;
        margin-bottom: 10rpx;
        // background-color: #0A98D5;
    }

    .icon {
        display: inline-block;
    }

    .uni-tabbar__label {
        color: #999;

        &.active {
            color: #1ca6ec;
        }
    }
    .icon-img {
        width: 50rpx;
    }
}
</style>

