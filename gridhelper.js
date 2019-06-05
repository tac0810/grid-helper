(function() {
	'use strict';

	/**
	 *
	 * @constructor
	 */
	function GridHelper() {
		/**
		 *
		 * @type {{color: string, alpha: number, position: number}}
		 * @private
		 */
		this._defaultProp = {
			color: '#5bf5ff',
			alpha: 1.0,
			position: 30,
		}

		/**
		 *
		 * @type {{gutter: number, color: string, left: number, alpha: number, width: number, right: number, cols: number}}
		 * @private
		 */
		this._defaultGridProp = {
			color: '#f00',
			alpha: 0.5,
			cols: 3,
			gutter: 30,
			width: 1280,
			right: 30,
			left: 30,
		}

		/**
		 *
		 * @type {RegExp}
		 * @private
		 */
		this._numberReg = /^[-]?[0-9]+(\.[0-9]+)?$/

		/**
		 *
		 * @type {RegExp}
		 * @private
		 */
		this._unitReg = /^[-]?[0-9]+(\.[0-9]+)?(em|ex|in|cm|mm|pt|pc|px|ch|rem|vw|vh|vmax|vmin|q|%)$/

		/**
		 *
		 * @type {HTMLElement}
		 * @private
		 */
		this._frame = document.createElement('div')

		/**
		 *
		 * @type {boolean}
		 * @private
		 */
		this._visible = true

		this._setUpFrame()
	}

	// public

	/**
	 * @public
	 */
	GridHelper.prototype.remove = function() {
		if (this._frame.childNodes.length > 0) {
			this._frame.removeChild(this._frame.childNodes[0])
		}
	}

	/**
	 *
	 * @param prop
	 * @public
	 */
	GridHelper.prototype.top = function(prop) {
		this._generateBorder('top', this._checkProps(prop, false))
	}

	/**
	 *
	 * @param prop
	 * @public
	 */
	GridHelper.prototype.right = function(prop) {
		this._generateBorder('right', this._checkProps(prop, false))
	}

	/**
	 *
	 * @param prop
	 * @public
	 */
	GridHelper.prototype.bottom = function(prop) {
		this._generateBorder('bottom', this._checkProps(prop, false))
	}

	/**
	 *
	 * @param prop
	 * @public
	 */
	GridHelper.prototype.left = function(prop) {
		this._generateBorder('left', this._checkProps(prop, false))
	}

	/**
	 *
	 * @param prop
	 * @public
	 */
	GridHelper.prototype.verticalCenter = function(prop) {
		this._generateBorder('left', this._checkProps(prop, true))
	}

	/**
	 *
	 * @param prop
	 * @public
	 */
	GridHelper.prototype.horizontalCenter = function(prop) {
		this._generateBorder('top', this._checkProps(prop, true))
	}

	/**
	 *
	 * @param prop
	 * @public
	 */
	GridHelper.prototype.center = function(prop) {
		this.verticalCenter(prop)
		this.horizontalCenter(prop)
	}

	/**
	 *
	 * @param prop
	 * @public
	 */
	GridHelper.prototype.verticalEnds = function(prop) {
		this.left(prop)
		this.right(prop)
	}

	/**
	 *
	 * @param prop
	 * @public
	 */
	GridHelper.prototype.horizontalEnds = function(prop) {
		this.top(prop)
		this.bottom(prop)
	}

	/**
	 *
	 * @param prop
	 * @public
	 */
	GridHelper.prototype.frame = function(prop) {
		this.verticalEnds(prop)
		this.horizontalEnds(prop)
	}

	/**
	 *
	 * @param prop {{gutter: number, color: string, left: number, alpha: number, width: number, right: number, cols: number}}
	 */
	GridHelper.prototype.verticalGrid = function(prop) {
		prop = this._checkGridProps(prop)

		var grid = document.createElement('div')
		grid.style.position = 'absolute'
		grid.style.display = 'block'
		grid.style.width = '100%'
		grid.style.height = '100%'
		grid.style.boxSizing = 'border-box'
		grid.style.opacity = prop.alpha
		grid.style.zIndex = '9999999'

		var gridInner = document.createElement('div')
		gridInner.style.display = 'flex'
		gridInner.style.height = '100%'

		if ('width' in prop) {
			gridInner.style.width = this._formatPosition(prop.width)
			gridInner.style.marginRight = 'auto'
			gridInner.style.marginLeft = 'auto'
		} else {
			gridInner.style.paddingLeft = this._formatPosition(prop.left)
			gridInner.style.paddingRight = this._formatPosition(prop.right)
		}

		if ('maxWidth' in prop) {
			gridInner.style.maxWidth = this._formatPosition(prop.maxWidth)
			gridInner.style.marginRight = 'auto'
			gridInner.style.marginLeft = 'auto'
		}

		for (var i = 0; i < prop.cols; i++) {
			var col = document.createElement('div')
			var _gutter = this._formatPosition(prop.gutter)

			col.style.height = '100%'
			col.style.flexGrow = 1
			col.style.flexBasis = 0
			col.style.marginRight = (prop.cols - 1 === i) ? 0 : _gutter
			col.style.borderRight = '1px solid ' + prop.color

			if (0 === i || Number(_gutter.replace(/\D/g, '')) > 0) {
				col.style.borderLeft = '1px solid ' + prop.color
			}

			gridInner.appendChild(col)
		}

		grid.appendChild(gridInner)
		this._frame.appendChild(grid)
	}

	// private

	/**
	 *
	 * @private
	 */
	GridHelper.prototype._setUpFrame = function() {
		this._frame.id = 'grid-helper-frame'
		this._frame.style.position = 'fixed'
		this._frame.style.display = 'block'
		this._frame.style.width = '100%'
		this._frame.style.height = '100%'
		this._frame.style.top = 0
		this._frame.style.left = 0
		this._frame.style.zIndex = '9999999'
		this._frame.style.pointerEvents = 'none'

		document.body.appendChild(this._frame)


		console.info('Press cmd + /')
		window.addEventListener('keydown',e => {
			if (((e.ctrlKey && !e.metaKey) || (!e.ctrlKey && e.metaKey)) && e.keyCode === 191) {
				this._visible = !this._visible
				this._frame.style.visibility = this._visible ? 'visible' : 'hidden'
			}
		})


	}

	/**
	 *
	 * @param key {string}
	 * @param prop {{enable: boolean, color: string, alpha: number, position: string}}
	 * @return {HTMLElement}
	 * @private
	 */
	GridHelper.prototype._generateBorder = function(key, prop) {
		if (!/^(top|right|bottom|left)$/.test(key)) {
			return
		}

		var border = document.createElement('div')
		border.style.position = 'absolute'
		border.style.display = 'block'
		border.style.width = /^(top|bottom)$/.test(key) ? '100%' : '1px'
		border.style.height = /^(top|bottom)$/.test(key) ? '1px' : '100%'
		border.style[key] = this._formatPosition(prop.position)
		border.style.opacity = prop.alpha
		border.style.backgroundColor = prop.color
		border.style.zIndex = '9999999'

		if ('adjust' in prop) {
			if ('top' === key) {
				border.style.marginTop = this._formatPosition(prop.adjust)
			}
			if ('left' === key) {
				border.style.marginLeft = this._formatPosition(prop.adjust)
			}
		}

		this._frame.appendChild(border)
	}

	/**
	 *
	 * @param position {number|string}
	 * @return {string}
	 * @private
	 */
	GridHelper.prototype._formatPosition = function(position) {
		if (this._checkType('number', position)) {
			return position + 'px'
		}

		if (this._checkUnit(position)) {
			return position
		}

		return this._defaultProp.position
	}

	/**
	 *
	 * @param props {{color: string, alpha: number, position: number}}
	 * @param isCenter {boolean}
	 * @return {{color: string, alpha: number, position: number}}
	 * @private
	 */
	GridHelper.prototype._checkProps = function(props, isCenter) {
		if (undefined === props || null === props || 'object' !== (typeof props).toLowerCase()) {
			return {
				color: this._defaultProp.color,
				alpha: this._defaultProp.alpha,
				position: isCenter ? '50%' : this._defaultProp.position
			}
		}

		var keys = ['color', 'alpha', 'position']
		var diffs = keys.filter(function(key) {
			return Object.keys(props).indexOf(key) === -1
		})

		if (diffs.length !== 0) {
			if (isCenter && this._numberReg.test(props.position) || this._unitReg.test(props.position)) {
				props.adjust = props.position
			}

			diffs.map(diff => {
				props[diff] = this._defaultProp[diff]
			})

			if (isCenter) {
				props.position = '50%'
			}
		}
		return props
	}

	/**
	 *
	 * @param props {{gutter: number, color: string, left: number, alpha: number, width: number, right: number, cols: number}}
	 * @return {{gutter: number, color: string, left: number, alpha: number, width: number, right: number, cols: number}}
	 * @private
	 */
	GridHelper.prototype._checkGridProps = function(props) {
		if (undefined === props || null === props || 'object' !== (typeof props).toLowerCase()) {
			return this._defaultGridProp
		}

		var keys = ['color', 'alpha', 'cols', 'gutter', 'right', 'left']
		var diffs = keys.filter(function(key) {
			return Object.keys(props).indexOf(key) === -1
		})

		if (diffs.length !== 0) {
			diffs.map(diff => {
				props[diff] = this._defaultGridProp[diff]
			})
		}
		return props
	}

	/**
	 *
	 * @param value {number|string}
	 * @return {boolean}
	 * @private
	 */
	GridHelper.prototype._checkUnit = function(value) {
		return this._checkType('string', value) && this._unitReg.test(value)
	}

	/**
	 *
	 * @param type {string}
	 * @param value {*}
	 * @return {boolean}
	 * @private
	 */
	GridHelper.prototype._checkType = function(type, value) {
		return type === (typeof value).toLowerCase()
	}

	window.GridHelper = GridHelper
})()
