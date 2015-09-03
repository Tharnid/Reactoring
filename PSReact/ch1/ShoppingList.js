var ShoppingList = React.createClass({
    render: function() {
        var itemRows = this.props.items.map(function(item) {
            return ShoppingItemRowComponent({item: item, key: item.name });
        });

        return React.DOM.div({},
            React.DOM.old({className: "items"},
                itemRows
            ),
            ShoppingTotalComponent({items: this.props.items})
        );
    }
});