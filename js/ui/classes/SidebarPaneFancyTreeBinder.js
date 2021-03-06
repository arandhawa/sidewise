/* Copyright (c) 2012 Joel Thornton <sidewise@joelpt.net> See LICENSE.txt for license details. */

var SidebarPaneFancyTreeBinder = function (a, b, c) {
    this.fancyTree = a;
    this.dataTree = b;
    this.backgroundPage = c
};
SidebarPaneFancyTreeBinder.prototype = {
    bind: function () {
        var a = this;
        this.fancyTree.permitTooltipHandler = function () {
            return a.permitTooltipHandler()
        };
        chrome.windows.onFocusChanged.addListener(function (b) {
            a.onChromeWindowFocusChanged(b)
        })
    },
    permitTooltipHandler: function () {
        return this.backgroundPage.focusTracker.chromeHasFocus
    },
    onChromeWindowFocusChanged: function () {
        this.fancyTree.hideTooltip();
        this.fancyTree.disableContextMenu()
    }
};
