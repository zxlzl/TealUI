/**
        var result = [], next = this.elem;
        for (; (next = next.nextElementSibling) && next.classList.contains('x-tagchooser');) {
            callback(next);
        }
    },
        var values = this.elem.value.split(/\s+/);
            elem.classList[values.indexOf(elem.textContent) < 0 ? 'remove' : 'add']('x-tagchooser-selected');
        });
	        values.push(value)
	    } else {
	        values.splice(index, 1);
	    }
	    this.elem.value = values.join(' ').trim();
	    this.onTargetChange();
	},

	    me.elem.on('keyup', me.onTargetChange, me);
	    me._eachTags(function(elem) {
	        elem.on('click', function(e) {
	            me.onTagClick(this, e);
	        });
	    });
	    me.onTargetChange();