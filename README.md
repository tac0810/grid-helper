# How to grid
```javascript
var gridHelper = new GridHelper()

gridHelper.verticalEnds()
// or
gridHelper.verticalEnds(30)
// or
gridHelper.verticalEnds({
  color: '#F00',
  alpha: 0.5,
  position: '50px'
})
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
### .right(property)
- Arguments:
  - { borderProperty | Number } property
  - { null } default
- Usage:  
  Draw right border.
### .bottom(property)
- Arguments:
  - { borderProperty | Number } property
  - { null } default
- Usage:  
  Draw bottom border.
### .left(property)
- Arguments:
  - { borderProperty | Number } property
  - { null } default
- Usage:  
  Draw left border.

### .verticalCenter(property)
 - Arguments:
   - { borderProperty | Number } property
   - { null } default
 - Usage:  
   Draw vertical center border.

### .horizontalCenter(property)
 - Arguments:
   - { borderProperty | Number } property
   - { null } default
 - Usage:  
   Draw horizontal center border.
 
### .center(property)
 - Arguments:
   - { borderProperty | Number } property
   - { null } default
 - Usage:  
   Draw vertical and horizontal center border.

### .verticalEnds(property)
 - Arguments:
   - { borderProperty | Number } property
   - { null } default
 - Usage:  
   Draw right and left border.
   
### .horizontalEnds(property)
 - Arguments:
   - { borderProperty | Number } property
   - { null } default
 - Usage:
   Draw top and bottom border.
   
### .frame(property)
 - Arguments:
   - { borderProperty | Number } property
   - { null } default
 - Usage:
   Draw verticalEnds and horizontalEnds border.

### .verticalGrid(property)
 - Arguments:
   - { gridProperty | Number } property
   - { null } default
 - Usage:
   Draw columns with gutter, if you want.

