var t = getApp(), a = require("../../utils/util.js");

Page({
    data: {
        addName: ""
    },
    onLoad: function(t) {},
    onShow: function() {
        for (var a = 0; a < t.globalData.fullList.length; a++) t.globalData.fullList[a].isSelect = !1;
        this.setData({
            fullList: t.globalData.fullList
        });
    },
    checkForSelect: function() {
        for (var t = this.data.fullList, a = !1, e = 0; e < t.length; e++) {
            if (t[e].isSelect) {
                a = !0;
                break;
            }
            a = !1;
        }
        this.setData({
            hasSelect: a
        });
    },
    select: function(t) {
        var a = t.currentTarget.dataset.key, e = this.data.fullList;
        e[a].isSelect = !e[a].isSelect, this.setData({
            fullList: e
        }), this.checkForSelect();
    },
    deleteList: function() {
        for (var t = this, e = this.data.fullList, l = 0, s = 0; s < e.length; s++) if (e[s].isSelect) {
            l++;
            break;
        }
        if(l) {
          for (var s = e.length - 1; s >= 0; s--) e[s].isSelect && e.splice(s, 1);
          a.saveList(e, t), t.setData({
              hasSelect: !1,
              isSelectAll: !1
          }), t.data.fullList.length || (t.setData({
              totalDeleted: !0
          }), t.addWrapToggle())
        }
    },
    deleteFullList: function() {
        var t = this;
        (a.saveList([], t), t.setData({
          totalDeleted: !0,
          hasSelect: !1
      }), t.addWrapToggle());
    },
    selectAll: function() {
        var t = this.data.fullList;
        this.data.hasSelect, this.data.isSelectAll;
        if (this.data.isSelectAll) {
            for (var a = 0; a < t.length; a++) t[a].isSelect = !1;
            this.setData({
                isSelectAll: !1,
                hasSelect: !1
            });
        } else {
            for (var e = 0; e < t.length; e++) t[e].isSelect = !0;
            this.setData({
                isSelectAll: !0,
                hasSelect: !0
            });
        }
        this.setData({
            fullList: t
        });
    },
    addWrapToggle: function() {
        this.setData({
            addWrapShow: !this.data.addWrapShow,
            listName: ""
        });
    },
    addName: function(t) {
        this.setData({
            addName: t.detail.value
        });
    },
    confirmAdd: function() {
        this.data.addName.length && (this.data.fullList.unshift({
            name: this.data.addName
        }), a.saveList(this.data.fullList, this), this.setData({
            addName: "",
            totalDeleted: !1
        }));
    },
    onReady: function() {},
    onHide: function() {},
    onUnload: function() {}
});