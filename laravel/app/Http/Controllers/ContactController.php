<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Contact;
use App\Http\Requests\ContactRequest;

class ContactController extends Controller
{
   
    public function store(ContactRequest $request){
        $contact=new Contact();
        $contact->last_name=$request->last_name;
        $contact->first_name=$request->first_name;
        $contact->phone=$request->phone;
        $contact->relation=$request->relation;
        $contact->email=$request->email;
        $contact->save();


    }
    public function index(){
        $all=Contact::all();
        return $all;
    }
    public function show($id)
    {
        return Contact::find($id);
    }

    public function update(ContactRequest $request, $id){
        $contact=Contact::find($id);
        $contact->last_name=$request->last_name;
        $contact->first_name=$request->first_name;
        $contact->phone=$request->phone;
        $contact->relation=$request->relation;
        $contact->email=$request->email;
        $contact->save();

    }
    public function delete($id){
        $contact=Contact::find($id);
        $contact->delete();

    }
}
