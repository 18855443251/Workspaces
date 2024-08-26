/**
 * 压缩图片到指定大小
 * baseImg base64 图片大小
 * maxSize 单位kb
 */
export function compressImgBySize(baseImg, maxSize = 1024) {
  return new Promise((resolve) => {
    // 计算图片大小
    const strLength = baseImg.length;
    const fileLength = parseInt(strLength - (strLength / 8) * 2);
    let size = parseInt((fileLength / 1024).toFixed(2));
    console.log("原图大小===》", size);
    // 判断图片是否符合指定大小要求
    if (size <= maxSize) {
      resolve(baseImg);
      return;
    }
    // 创建image对象
    const img = new Image();
    if (baseImg.indexOf("data:image/") !== -1) {
      img.src = baseImg;
    } else {
      img.src = "data:image/png;base64," + baseImg;
    }

    img.onload = () => {
      // 把image对象 转换成canvas对象
      const canvas = imgToCanvas(img);
      let resUrl = "";
      // 图片质量， 范围 0-1
      let quality = 0.9;
      // 当图片大于指定maxSize, 图片质量大于0时 继续通过降低图片资源来压缩
      while (size > maxSize && quality > 0) {
        // 在canvas上绘制HTMLImageElement, 得到图片base64
        resUrl = canvas
          .toDataURL("image/jpeg", quality)
          .replace(/^data:image\/\w+;base64,/, "");
        const resLength = resUrl.length;
        // 计算绘制出的base64图片大小
        const resFileLength = parseInt(resLength - (resLength / 8) * 2);
        size = parseInt((resFileLength / 1024).toFixed(2));
        // 降低图片质量
        quality = (quality - 0.1).toFixed(1);
      }
      resolve(resUrl);
    };
    img.onerror = () => {
      resolve(baseImg);
    };
  });
}

export function imgToCanvas(image) {
  var canvas = document.createElement("canvas");
  canvas.width = image.width;
  canvas.height = image.height;
  canvas.getContext("2d").drawImage(image, 0, 0);
  return canvas;
}
export function test(str) {
  console.log(headFor(str), "进来了");
  if (headFor(str)) {
    return headFor(str);
  } else {
    return "测试";
  }
}
export const getnewNenuList = (str) => {
  // let filterObj = function (str) {
  //   return str + "好好";
  // };
  // return filterObj;
  return str + "好好";
};
function headFor(str) {
  if (!str) {
    return "--";
  }
}
