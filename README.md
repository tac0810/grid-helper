# How to grid
if you want to hide the grids, press `cmd + /`. 

```javascript
var gridHelper = new GridHelper()

// default
gridHelper.verticalEnds()

// or set pixel
gridHelper.verticalEnds(30)

// or set properties
gridHelper.verticalEnds({
  color: '#F00',
  alpha: 0.5,
  position: '50px'
})
```

## BreakPoints Sample
```javascript
var gridHelper = new GridHelper();

var setGrid = function(){
  
  // remove 
  gridHelper.remove()
  
  if(1440 <= window.innerWidth){
    // re-set
    gridHelper.verticalGrid({
      cols: 14,
      left: 0,
      right: 0,
      gutter: 0,
      alpha: 0.7,
      maxWidth: 1680,
      color: '#00ffff' 
    })  
  }
  
  if(768 < window.innerWidth && window.innerWidth < 1440){
    // re-set
    gridHelper.verticalGrid({
      cols: 6,
      left: '12%',
      right: '12%',
      gutter: 0,
      alpha: 0.7,
      color: '#00ffff'
    })
  }
  
  if(768 <= window.innerWidth){
    // re-set
    gridHelper.verticalGrid({
      cols: 6,
      left: 16,
      right: 16,
      gutter: 0,
      alpha: 0.7,
      color: '#00ffff'
    })  
  }
}

// setup
setGrid()

// bind resize event
window.addEventListener('resize', setGrid, false)
```
## Border Property
```javascript
var borderProperty = {
  color: '#F00',
  alpha: 0.5,
  position: '50px'
}
```
- color { String }
  - Please use CSS color
- alpha { Number }
  - You can use 0.0 ~ 1.0
- position { Number | String }
  - You can use Number and below units.
  - 'em', 'ex', 'in', 'cm', 'mm', 'pt', 'pc', 'px', 'ch', 'rem', 'vw', 'vh', 'vmax', 'vmin', 'q', '%'

## Grid Property
```javascript
var gridProperty = {
  color: '#f00',
  alpha: 0.5,
  cols: 3,
  gutter: 30,
  width: 1280,
  right: 30,
  left: 30,
}
```
- color { String }
  - Please use CSS color
- alpha { Number }
  - You can use 0.0 ~ 1.0
- cols { Number }
  - Please use integer
- gutter { Number | String }
  - You can use Number and below units.
  - 'em', 'ex', 'in', 'cm', 'mm', 'pt', 'pc', 'px', 'ch', 'rem', 'vw', 'vh', 'vmax', 'vmin', 'q', '%'
- width { Number | String }
  - You can use Number and below units.
  - 'em', 'ex', 'in', 'cm', 'mm', 'pt', 'pc', 'px', 'ch', 'rem', 'vw', 'vh', 'vmax', 'vmin', 'q', '%'
- right { Number | String }
  - If 'width' puts in gridProperty, 'right' property is disabled. 
  - You can use Number and below units.
  - 'em', 'ex', 'in', 'cm', 'mm', 'pt', 'pc', 'px', 'ch', 'rem', 'vw', 'vh', 'vmax', 'vmin', 'q', '%'
- left { Number | String }
  - If 'width' puts in gridProperty, 'left' property is disabled.
  - You can use Number and below units.
  - 'em', 'ex', 'in', 'cm', 'mm', 'pt', 'pc', 'px', 'ch', 'rem', 'vw', 'vh', 'vmax', 'vmin', 'q', '%'

## Instance Methods
### .top(property)
- Arguments:
  - { borderProperty | Number } property
  - { null } default
- Usage:  
  Draw top border.  
  
![alt text](https://github.com/tac0810/grid-helper/blob/master/examples/top.png)

### .right(property)
- Arguments:
  - { borderProperty | Number } property
  - { null } default
- Usage:  
  Draw right border.

![alt text](https://github.com/tac0810/grid-helper/blob/master/examples/right.png)

### .bottom(property)
- Arguments:
  - { borderProperty | Number } property
  - { null } default
- Usage:  
  Draw bottom border.
  
![alt text](https://github.com/tac0810/grid-helper/blob/master/examples/bottom.png)
  
### .left(property)
- Arguments:
  - { borderProperty | Number } property
  - { null } default
- Usage:  
  Draw left border.

![alt text](https://github.com/tac0810/grid-helper/blob/master/examples/left.png)

### .verticalCenter(property)
 - Arguments:
   - { borderProperty | Number } property
   - { null } default
 - Usage:  
   Draw vertical center border.

![alt text](https://github.com/tac0810/grid-helper/blob/master/examples/verticalCenter.png)

### .horizontalCenter(property)
 - Arguments:
   - { borderProperty | Number } property
   - { null } default
 - Usage:  
   Draw horizontal center border.
 
![alt text](https://github.com/tac0810/grid-helper/blob/master/examples/horizontalCenter.png)
 
### .center(property)
 - Arguments:
   - { borderProperty | Number } property
   - { null } default
 - Usage:  
   Draw vertical and horizontal center border.

![alt text](https://github.com/tac0810/grid-helper/blob/master/examples/center.png)

### .verticalEnds(property)
 - Arguments:
   - { borderProperty | Number } property
   - { null } default
 - Usage:  
   Draw right and left border.
   
![alt text](https://github.com/tac0810/grid-helper/blob/master/examples/verticalEnds.png)
   
### .horizontalEnds(property)
 - Arguments:
   - { borderProperty | Number } property
   - { null } default
 - Usage:
   Draw top and bottom border.
   
![alt text](https://github.com/tac0810/grid-helper/blob/master/examples/horizontalEnds.png)
   
### .frame(property)
 - Arguments:
   - { borderProperty | Number } property
   - { null } default
 - Usage:
   Draw verticalEnds and horizontalEnds border.

![alt text](https://github.com/tac0810/grid-helper/blob/master/examples/frame.png)

### .verticalGrid(property)
 - Arguments:
   - { gridProperty } property
   - { null } default
 - Usage:
   Draw columns with gutter, if you want.

![alt text](https://github.com/tac0810/grid-helper/blob/master/examples/verticalGrid.png)
