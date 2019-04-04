(function() {
	// 'use strict';

	/**
	 *
	 * @param props {{key: {enable: boolean, color: string, alpha: number, to: string}}}
	 * @constructor
	 */
	function GridHelper(props) {

		/**
		 *
		 * @type {HTMLElement}
		 * @private
		 */
		this._frame = document.createElement('div')
		this._init(props)
	}

	/**
	 *
	 * @private
	 */
	GridHelper.prototype._init = function(props) {
		this._checkProps(props)
		this._setUpFrame()
	}

	GridHelper.prototype._checkProps = function(props) {
		if (undefined === props || null === props || 'object' !== (typeof props).toLowerCase()) {
			return
		}
		var propKeys = Object.keys(props)
		for (var i = 0; i < propKeys.length; i++) {
			var propKey = propKeys[i];

			if (/Center/.test(propKey)) {
				this._setCenterBorders(propKey, props[propKey])
			} else {
				this._setBorders(propKey, props[propKey])
			}
		}

	}


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
		this._frame.style.zIndex = '9999999'
		this._frame.style.pointerEvents = 'none'

		document.body.appendChild(this._frame)
	}

	/**
	 *
	 * @param key {string}
	 * @param prop {{enable: boolean, color: string, alpha: number, to: string}}
	 * @private
	 */
	GridHelper.prototype._setBorders = function(key, prop) {
		if (!/^(top|right|bottom|left)$/.test(key)) {
			return
		}

		if (!prop.enable) {
			return
		}

		var border = document.createElement('div')

		border.id = 'grid-helper-' + key
		border.style.position = 'absolute'
		border.style.display = 'block'
		border.style.width = /^(top|bottom)$/.test(key) ? '100%' : '1px'
		border.style.height = /^(top|bottom)$/.test(key) ? '1px' : '100%'
		border.style[key] = prop.to
		border.style.opacity = prop.alpha
		border.style.backgroundColor = prop.color
		border.style.zIndex = '9999999'

		this._frame.appendChild(border)
	}

	/**
	 *
	 * @param key {string}
	 * @param prop {{enable: boolean, color: string, alpha: number, to: string}}
	 * @private
	 */
	GridHelper.prototype._setCenterBorders = function(key, prop) {
		if (!/^(verticalCenter|horizontalCenter)$/.test(key)) {
			return
		}

		if (!prop.enable) {
			return
		}

		var border = document.createElement('div')
		var isVertical = /^verticalCenter$/.test(key)

		border.id = 'grid-helper-' + key
		border.style.position = 'absolute'
		border.style.display = 'block'
		border.style.width = isVertical ? '100%' : '1px'
		border.style.height = isVertical ? '1px' : '100%'
		border.style[isVertical ? 'top' : 'left'] = '50%'
		border.style.opacity = prop.alpha
		border.style.backgroundColor = prop.color
		border.style.zIndex = '9999999'

		this._frame.appendChild(border)
	}

	window.GridHelper = GridHelper
})()
