import 'package:flutter/material.dart';

GlobalKey<_ChildState> childKey = new GlobalKey<_ChildState>();

class Child extends StatefulWidget {
  Child({Key key}) : super(key: key);

  @override
  _ChildState createState() => _ChildState();
}

class _ChildState extends State<Child> {
  void callChild(String message) {
    print(message);
  }

  @override
  Widget build(BuildContext context) {
    return new Container();
  }
}