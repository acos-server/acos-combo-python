var ComboPython = function() {};

ComboPython.addToHead = function(params) {
    return '<script src="/static/combo-python/exercises.js" type="text/javascript"></script>\n';
};

ComboPython.addToBody = function(params) {
    return '';
};

ComboPython.initialize = function(req, params, handlers, cb) {

    // Initialize the content package
    params.headContent += ComboPython.addToHead(params);
    params.bodyContent += ComboPython.addToBody(params);

    cb();

};

ComboPython.register = function(handlers) {
    handlers.contentPackages['combo-python'] = ComboPython;
    handlers.contentTypes.combo.installedContentPackages.push(ComboPython);
};

ComboPython.namespace = 'combo-python';
ComboPython.contentTypeNamespace = 'combo';
ComboPython.packageType = 'content';

ComboPython.meta = {
    'name': 'combo-python',
    'shortDescription': 'Combination of JS-Parsons and JSVEE exercises.',
    'description': '',
    'author': 'Teemu Sirkiä',
    'license': 'MIT',
    'version': '0.1.0',
    'url': '',
    'teaserContent' : ['combo_avg', 'combo_swap'],
    'contents':     {
        'combo_avg': {
            'description': '',
            'order': 0,
            'title': 'combo_avg'
        },'combo_swap': {
            'description': '',
            'order': 1,
            'title': 'combo_swap'
        },'combo_python_if': {
            'description': '',
            'order': 2,
            'title': 'combo_python_if'
        },'combo_python_while': {
            'description': '',
            'order': 3,
            'title': 'combo_python_while'
        },'combo_python_while2': {
            'description': '',
            'order': 4,
            'title': 'combo_python_while2'
        },'combo_python_function': {
            'description': '',
            'order': 5,
            'title': 'combo_python_function'
        },'combo_python_list': {
            'description': '',
            'order': 6,
            'title': 'combo_python_list'
        },'combo_python_split': {
            'description': '',
            'order': 7,
            'title': 'combo_python_split'
        },'combo_python_dict': {
            'description': '',
            'order': 8,
            'title': 'combo_python_dict'
        },'combo_python_class1': {
            'description': '',
            'order': 9,
            'title': 'combo_python_class1'
        },'combo_python_class2': {
            'description': '',
            'order': 10,
            'title': 'combo_python_class2'
        }
    }
};

module.exports = ComboPython;
