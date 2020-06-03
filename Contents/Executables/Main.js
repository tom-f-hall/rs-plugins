/*
 React Studio wrapper for the 'react-compound-slider' npm package.

  Version: 0.1.0
  Release: XX June 2020
  Author: Tom Hall
  Contact: info@appsolutely.dev
  Copyright: © 2020 Appsolutely (UK) Limited

 */


// -- plugin info requested by host app --

this.describePlugin = function(id, lang) {

  switch (id) {
    case 'displayName':
      return "React Compound Slider";

    case 'shortDisplayText':
      return "Welcome to the future. React Compound Slider is a tiny (4.3kb) slider component with no opinion about markup or styles.";

    case 'defaultNameForNewInstance':
      return "reactCompoundSlider";
  }

}

// -- private variables --


this._data = {
  disabled: false,
  disabledColour: [0.18,0.18,0.18,1],
  vertical: false,
  reversed: false,
  updateDuringSlide: false,
    // data variables
  minValue: 0,
  maxValue: 100,
  stepValue: 1,
  modeValue: 3,

  // ui variables - rail
  railHeight: 10,
  railMarginTop: 35,
  railBorderRadius: 5,
  railBackgroundColour: [1,0,0,1],

  // ui variables - handle
  customHandle: '',
  handleWidth: 30,
  handleHeight: 30,
  handleBorder: 0,
  handleBorderRadius: '50%',
  handleBackgroundColour: [1,0,0,1],
  handleColour: '#333',

  // ui variables - track
  trackColour: [1,0,0,1],
  trackBorderRadius: 5,
  
  //ui variables - tick
  tickBackgroundColour: [1,0,0,1],
  tickWidth: 1,
  tickHeight: 8,
  tickCount: 10,

  //default value
  values: [0],
};


// -- persistence, i.e. saving and loading --

this.persist = function() {
  return this._data;
}

this.unpersist = function(data) {
	if ( !Array.isArray(data.color))
		data.color = [1, 1, 0, 1];

    if ( !data.readonly)
      data.readonly = false;
  
	this._data = data;
}


// -- inspector UI --

this.inspectorUIDefinition = [
  {
    "type": "label",
    "text": "React Compound Slider, v.0.1.0. "
    + "\n\nWelcome to the future. "
    + "\n\nReact Compound Slider is a tiny (4.3kb) "
    + "\nslider component with no opinion about "
    + "\nmarkup or styles."
    + "\n\nThis plugin uses react-compound-slider by sghall"
    + "\n\nPlugin by Appsolutely"
  },
  {
    "type": "label",
    "text": "Data Settings",
    "paddingTop": 20
  },
  {
    "type": "checkbox",
    "id": "disabled",
    "label": "Disabled for user",
    "actionBinding": "this.onUIChange"
  },
  {
    "type": "colorpicker",
    "id": "disabledColour",
    "label": "Disabled colour",
    "actionBinding": "this.onUIChange"
  },
  {
    "type": "checkbox",
    "id": "vertical",
    "label": "Vertical",
    "actionBinding": "this.onUIChange"
  },
  {
    "type": "checkbox",
    "id": "reversed",
    "label": "Reverse scale",
    "actionBinding": "this.onUIChange"
  },
  {
    "type": "checkbox",
    "id": "updateDuringSlide",
    "label": "Update value during slide",
    "actionBinding": "this.onUIChange"
  },
  {
    "type": "numberinput",
    "id": "minValue",
    "label": "Min value",
    "min": 0,
    "max": 100,
    "increment": 1,
    "actionBinding": "this.onUIChange"
  },
  {
    "type": "numberinput",
    "id": "maxValue",
    "label": "Max value",
    "min": 1,
    "max": 100,
    "increment": 1,
    "actionBinding": "this.onUIChange"
  },
  {
    "type": "numberinput",
    "id": "stepValue",
    "label": "Interval",
    "min": 1,
    "max": 20,
    "increment": 1,
    "actionBinding": "this.onUIChange"
  },
  {
    "type": "label",
    "text": "UI Settings",
    "paddingTop": 20
  }, 
  {
    "type": "label",
    "text": "Rail",
    "paddingTop": 10
  },
  {
    "type": "numberinput",
    "id": "railHeight",
    "label": "Height",
    "min": 0.1,
    "max": 50,
    "increment": 0.1,
    "actionBinding": "this.onUIChange"
  },
  {
    "type": "numberinput",
    "id": "railMarginTop",
    "label": "Top margin",
    "min": 0.1,
    "max": 50,
    "increment": 0.1,
    "actionBinding": "this.onUIChange"
  },
  {
    "type": "numberinput",
    "id": "railBorderRadius",
    "label": "Border radius",
    "min": 0.1,
    "max": 50,
    "increment": 0.1,
    "actionBinding": "this.onUIChange"
  },
  {
    "type": "colorpicker",
    "id": "railBackgroundColour",
    "label": "Background colour",
    "actionBinding": "this.onUIChange"
  },
  {
    "type": "label",
    "text": "Handle",
    "paddingTop": 10
  },
  {
    "type": "component-picker",
    "id": "customHandle",
    "actionBinding": "this.onUIChange"
  },
  {
    "type": "numberinput",
    "id": "handleWidth",
    "label": "Width",
    "min": 0.1,
    "max": 50,
    "increment": 0.1,
    "actionBinding": "this.onUIChange"
  },
  {
    "type": "numberinput",
    "id": "handleHeight",
    "label": "Height",
    "min": 0.1,
    "max": 50,
    "increment": 0.1,
    "actionBinding": "this.onUIChange"
  },
  {
    "type": "numberinput",
    "id": "handleBorder",
    "label": "Border",
    "min": 0.1,
    "max": 50,
    "increment": 0.1,
    "actionBinding": "this.onUIChange"
  },
  {
    "type": "numberinput",
    "id": "handleBorderRadius",
    "label": "Border radius",
    "min": 0.1,
    "max": 50,
    "increment": 0.1,
    "actionBinding": "this.onUIChange"
  },
  {
    "type": "colorpicker",
    "id": "handleBackgroundColour",
    "label": "Background colour",
    "actionBinding": "this.onUIChange"
  },
  {
    "type": "colorpicker",
    "id": "handleColour",
    "label": "Colour",
    "actionBinding": "this.onUIChange"
  },
  {
    "type": "label",
    "text": "Track",
    "paddingTop": 10
  },
  {
    "type": "colorpicker",
    "id": "trackBackgroundColour",
    "label": "Colour",
    "actionBinding": "this.onUIChange"
  },
  {
    "type": "numberinput",
    "id": "trackBorderRadius",
    "label": "Border radius",
    "min": 0.1,
    "max": 50,
    "increment": 0.1,
    "actionBinding": "this.onUIChange"
  },
  {
    "type": "label",
    "text": "Tick",
    "paddingTop": 10
  },
  {
    "type": "numberinput",
    "id": "tickCount",
    "label": "Tick count",
    "min": 0.1,
    "max": 50,
    "increment": 0.1,
    "actionBinding": "this.onUIChange"
  },
  {
    "type": "colorpicker",
    "id": "tickBackgroundColour",
    "label": "Colour",
    "actionBinding": "this.onUIChange"
  },
  {
    "type": "numberinput",
    "id": "tickWidth",
    "label": "Width",
    "min": 0.1,
    "max": 50,
    "increment": 0.1,
    "actionBinding": "this.onUIChange"
  },
  {
    "type": "numberinput",
    "id": "tickHeight",
    "label": "Height",
    "min": 0.1,
    "max": 50,
    "increment": 0.1,
    "actionBinding": "this.onUIChange"
  }
];

this._uiTextFields = [];
this._uiCheckboxes =    [     'disabled', 'vertical', 'reversed', 'updateDuringSlide' ];
this._uiNumberFields = [      'minValue', 'maxValue', 'stepValue', 'modeValue', 
                              'railHeight', 'railMarginTop', 'railBorderRadius',
                              'handleWidth', 'handleHeight', 'handleBorder', 
                              'handleBorderRadius', 'trackBorderRadius',
                              'tickWidth', 'tickHeight', 'tickCount' ];
this._uiColorPickers = [      'railBackgroundColour', 'handleBackgroundColour',
                              'handleColour', 'trackColour', 'trackBackgroundColour',
                              'tickBackgroundColour', 'disabledColour' ];
this._uiComponentPickers = [  'customHandle' ];

this._accessorForDataKey = function(key) {
  if (this._uiTextFields.includes(key)) return 'text';
  else if (this._uiCheckboxes.includes(key)) return 'checked';
  else if (this._uiNumberFields.includes(key)) return 'numberValue';
  else if (this._uiColorPickers.includes(key)) return 'rgbaArrayValue';
  else if (this._uiComponentPickers.includes(key)) return 'componentName';
  return null;
}

this.onCreateUI = function() {
  var ui = this.getUI();
  for (var controlId in this._data) {
    var prop = this._accessorForDataKey(controlId);
    if (prop) {
      try {
      	ui.getChildById(controlId)[prop] = this._data[controlId];
      } catch (e) {
        console.log("** can't set ui value for key "+controlId+", prop "+prop);
      }
    }
  }
}

this.onUIChange = function(controlId) {
  var ui = this.getUI();
  var prop = this._accessorForDataKey(controlId);
  if (prop) {
    this._data[controlId] = ui.getChildById(controlId)[prop];
  } else {
    console.log("** no data property found for controlId "+controlId);
  }
}


// -- plugin preview --

this.renderIcon = function(canvas) {
  this._renderPreview(canvas, null, true, 5);
};

this.renderEditingCanvasPreview = function(canvas, controller) {
  this._renderPreview(canvas, controller, false, this._data.maxValue - this._data.minValue);
}

this._renderPreview = function(canvas, controller, fitToWidth, numIcons) {
  var ctx = canvas.getContext('2d');
  var w = canvas.width;
  var h = canvas.height;
  ctx.save();
  
  var scale = 1;
  if (controller && controller.renderPixelsPerWebPixel) {
    scale = controller.renderPixelsPerWebPixel;
    ctx.scale(scale, scale);
  }
  
  var color = "rgba(0, 0, 0, 0.75)";
  ctx.fillStyle = color;
  ctx.strokeStyle = color;
  
  ctx.strokeWidth = scale * 0.7;

  var x = w / scale;
  var y = h / scale;
  
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(0, y); 
  ctx.lineTo(x, 0);
  ctx.lineTo(x, y);
  ctx.lineTo(0, 0);
  ctx.lineTo(x, 0);
  ctx.moveTo(0, y);
  ctx.lineTo(x, y);
  ctx.closePath();
  ctx.stroke();
  ctx.font = "24px Arial";
  ctx.textAlign = "center";
  ctx.strokeText('react-compound-slider', x/2, (y/2)+(24/2));

  ctx.restore();
}


// -- code generation, React web --

this.getReactWebPackages = function() {
  // Return dependencies that need to be included in the exported project's package.json file.
  // Each key is an npm package name that must be imported, and the value is the package version.
  // 
  // Example:
  //    return { "somepackage": "^1.2.3" }
  
  return {
    "react-compound-slider": "^2.5.0"
  };
}

this.getReactWebImports = function(exporter) {
	var arr = [
    { varName: " { Slider, Handles, Tracks, Rail, Ticks } ", path: "react-compound-slider" }
  ];
	
	return arr;
}


this.writesCustomReactWebComponent = false;

this.reactWebDataLinkKeys = [
	"values"
];

this.reactWebInteractions = [
	"valueChange"  // This is the id for the default interaction available to plugins in React Studio
];

this.describeReactWebInteraction = function(exporter, interactionId) {
	switch (interactionId) {
		case 'valueChange':
			return {
				actionMethod: {
					arguments: ['values'],
					getDataExpression: 'values'
				}
			};
	}
	return null;
}


this.getReactWebRenderMethodSetupCode = function(exporter, varName) {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
  var jsx = `function Handle({
    handle: {id, value, percent },
    getHandleProps
  }) {
    return (
      <div
        style={{
          left: \`$\{percent\}%\`,
          position: 'absolute',
          marginLeft: -15,
          marginTop: 25,
          zIndex: 2,
          width: ${this._data.handleWidth},
          height: ${this._data.handleHeight},
          border: ${this._data.handleBorder},
          textAlign: 'center',
          cursor: 'pointer',
          borderRadius: ${this._data.handleBorderRadius},
          backgroundColor: '${ this._data.disabled ? this._rgbaFromColourArray(this._data.disabledColour, false) : this._rgbaFromColourArray(this._data.handleBackgroundColour, false)}',
          color: '${ this._data.disabled ? this._rgbaFromColourArray(this._data.disabledColour, true) : this._rgbaFromColourArray(this._data.handleColour, false)}',
        }}
        { ...getHandleProps(id) }
      >
        <div style={{ fontFamily: 'Roboto', fontSize: 11, marginTop: -35 }}>
          {value}
        </div>
      </div>
    )
  };

  function Track({ source, target, getTrackProps }) {
    return (
      <div
        style={{
          position: 'absolute',
          height: 10,
          zIndex: 1,
          marginTop: 35,
          backgroundColor: '${ this._data.disabled ? this._rgbaFromColourArray(this._data.disabledColour, true) : this._rgbaFromColourArray(this._data.trackBackgroundColour, false)}',
          borderRadius: ${this._data.trackBorderRadius},
          cursor: 'pointer',
          left: \`$\{source.percent\}%\`,
          width: \`$\{target.percent - source.percent\}%\`,
        }}
        { ...getTrackProps() }
      />
    )
  };

  function Tick({ tick, count }) {
    return (
      <div>
        <div
          style={{
            position: 'absolute',
            marginTop: 52,
            marginLeft: -0.5,
            width: ${this._data.tickWidth},
            height: ${this._data.tickHeight},
            backgroundColor: '${ this._data.disabled ? this._rgbaFromColourArray(this._data.disabledColour, true) : this._rgbaFromColourArray(this._data.tickBackgroundColour, false)}',
            left: \`$\{tick.percent\}%\`,
          }}
        />
        <div
          style={{
            position: 'absolute',
            marginTop: 60,
            fontSize: 10,
            textAlign: 'center',
            marginLeft: \`$\{100 / count\}%\`,
            left: \`$\{tick.percent\}%\`,
          }}
        >
          {tick.value}
        </div>
      </div>
    )
  };

    function getArrayOfNums(fromString) {
      var toArray = [];
      fromString = fromString + '';
      toArray.push.apply(toArray, fromString.split(",").map(Number));
      return toArray;
    }
    
    `;
  return jsx;

};


this.getReactWebJSXCode = function(exporter) {

  const sliderStyle = {
    position: 'relative',
    width: '100%',
    height: '100%',
    border: '1px solid steelblue'
  };
  
  const railStyle = {
    position: 'absolute',
    width: '100%',
    cursor: 'pointer',
    height: `${this._data.railHeight}px`,
    marginTop: `${this._data.railMarginTop}px`,
    borderRadius: `${this._data.railBorderRadius}px`,
    backgroundColor: `${this._data.disabled ? this._rgbaFromColourArray(this._data.disabledColour, true) : this._rgbaFromColourArray(this._data.railBackgroundColour, false)}`,
    //'#8B9CB6'
  };
  
  var jsx = `<Slider 
    rootstyle={${JSON.stringify(sliderStyle)}} 
    domain={[${this._data.minValue},${this._data.maxValue}]}
    disabled={${this._data.disabled}}
    reversed={${this._data.reversed}}
    vertical={${this._data.vertical}}
    step={${this._data.stepValue}}
    mode={${this._data.modeValue}}`;

  var valuesLinkage = exporter.getExpressionForLinkKey('values');
    if (valuesLinkage) {
      jsx += `\n\t values={getArrayOfNums([${valuesLinkage}])}`;
    }
  
  if (this._data.updateDuringSlide == true) {
    var onValueUpdate = exporter.getCallbackForInteraction('valueChange');
    if (onValueUpdate) {
      jsx += `\n\t\t onUpdate={${onValueUpdate}}`;
    }
  }

  if (this._data.updateDuringSlide == false) {
    var onValueChange = exporter.getCallbackForInteraction('valueChange');
    if (onValueChange) {
      jsx += `\n\t\t onChange={${onValueChange}}`;
    }
  }

  jsx += `>`;

  // Rail

  jsx += `\n\t<Rail>`;
  jsx += `\n\t\t{({ getRailProps }) => (`;
  jsx += `\n\t\t\t<div style={${JSON.stringify(railStyle)}} {...getRailProps()} />`;
  jsx += `\n\t\t)}`;
  jsx += `\n\t</Rail>`;
  
  // Handle(s)

  jsx += `\n\t<Handles>`;
  jsx += `\n\t\t{({ handles, getHandleProps }) => (`;
  jsx += `\n\t\t\t<div className="slider-handles">`;
  jsx += `\n\t\t\t\t{handles.map(handle => (`;
  jsx += `\n\t\t\t\t\t<Handle`;
  jsx += `\n\t\t\t\t\t\tkey={handle.id}`;
  jsx += `\n\t\t\t\t\t\thandle={handle}`;
  jsx += `\n\t\t\t\t\t\tgetHandleProps={getHandleProps}`;
  jsx += `\n\t\t\t\t\t/>`;
  jsx += `\n\t\t\t\t))}`;
  jsx += `\n\t\t\t</div>`;
  jsx += `\n\t\t)}`;
  jsx += `\n\t</Handles>`;
  
  // Track

  if (this._data.modeValue > 2) {
    jsx += `\n\t<Tracks left={false} right={false}>`;
  }

  if (this._data.modeValue <= 2) {
    jsx += `\n\t<Tracks right={false}>`
  }

  jsx += `\n\t\t{({ tracks, getTrackProps }) => (`;
  jsx += `\n\t\t\t<div className="slider-tracks">`;
  jsx += `\n\t\t\t\t{tracks.map(({ id, source, target }) => (`;
  jsx += `\n\t\t\t\t\t<Track`;
  jsx += `\n\t\t\t\t\t\tkey={id}`;
  jsx += `\n\t\t\t\t\t\tsource={source}`;
  jsx += `\n\t\t\t\t\t\ttarget={target}`;
  jsx += `\n\t\t\t\t\t\tgetTrackProps={getTrackProps}`;
  jsx += `\n\t\t\t\t\t/>`;
  jsx += `\n\t\t\t\t))}`;
  jsx += `\n\t\t\t</div>`;
  jsx += `\n\t\t)}`;
  jsx += `\n\t</Tracks>`;

// Ticks

  jsx += `\n\t<Ticks count={${this._data.tickCount}}>`;
  jsx += `\n\t\t{({ ticks }) => (`;
  jsx += `\n\t\t\t<div className="slider-ticks">`;
  jsx += `\n\t\t\t\t{ticks.map(tick => (`;
  jsx += `\n\t\t\t\t\t<Tick key={tick.id} tick={tick} count={tick.length} />`;
  jsx += `\n\t\t\t\t))}`;
  jsx += `\n\t\t\t</div>`;
  jsx += `\n\t\t)}`;
  jsx += `\n\t</Ticks>`;

  jsx += `\n</Slider>`;

  return jsx;
}

// utility function to write HTML colors
this._rgbaFromColourArray = function(c, fade) {
  return `rgba(${255*c[0]}, ${255*c[1]}, ${255*c[2]}, ${ fade ? 0.8*c[3] : c[3] })`;
}