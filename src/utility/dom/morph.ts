﻿/**
 * 动态改变当前列表每一项的大小和位置到指定容器。
 * @param {mixed} container 要转换的容器节点或区域。
 * @returns this
 * @example $("#elem").morph()
 */
    // 获取容器区域。
    container = container && container.top != null && container.width != null ? container : (Dom(container).valueOf() || Dom(document)).rect();
        // 获取当前节点区域。
        var rect = elem.rect();

        // 获取当前节点区域。
        var offset = elem.offset();