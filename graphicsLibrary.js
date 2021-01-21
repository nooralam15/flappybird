//graphics library will create efficient functions that will deal with drawing various things

//functions legend
// canvasSize(width, height)
// fill(color)
// font(fontSetting)
// rect(x, y, w, h, mode)
//text(message, x, y, mode)
// image(img, x, y, w, h)


// Set the fillStyle
function fill(color) {
    ctx.fillStyle = color;
  }
  
  // Set the font
function font(fontSetting) {
    ctx.font = fontSetting;
  }

// Draw stroke or fill text with bottom-left corner (x,y)
function text(message, x, y, mode) {
  if (mode === "fill") {
    ctx.fillText(message, x, y);
  } else if (mode === "stroke") {
    ctx.strokeText(message, x, y);
  }
}

//adds a shadowblur thickness to the text
function shadowThickness(number) {
  ctx.shadowBlur = number
}

function shadowShade(color) {
  ctx.shadowColor = color    
}



// Draw a stroke or fill rectangle with a top-left corner of (x,y), a width of w and a height of h
function rect(x, y, w, h, mode) {
    if (mode === "fill") {
      ctx.fillRect(x, y, w, h);
    } else if (mode === "stroke") {
      ctx.strokeRect(x, y, w, h);
    }
  }

// Draw an image on the canvas
function image(img, x, y, w, h) {
    ctx.drawImage(img, x, y, w, h);
  }