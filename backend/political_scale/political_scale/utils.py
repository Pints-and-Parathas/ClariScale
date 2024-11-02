def join_json(json_object_1, json_object_2, fields):
    """
    Merges `json_object_2` into `json_object_1` by copying specified fields from `json_object_2`.
    Handles cases where values in `json_object_2` are lists of dictionaries as well as direct key-value pairs.
    
    Parameters:
        json_object_1 (dict): The primary JSON object that will be updated.
        json_object_2 (dict): The JSON object from which fields are copied.
        fields (list): A list of field names to include in the merged output.
        
    Returns:
        dict: The updated `json_object_1` with merged fields from `json_object_2`.
    """

    for object_2_key, object_2_value in json_object_2.items():
        # Check if object_2_value is a list of dictionaries
        if isinstance(object_2_value, list) and all(isinstance(item, dict) for item in object_2_value):
            # Only include fields present in each dictionary of the list
            json_object_1[object_2_key] = [
                {field: item[field] for field in fields if field in item} for item in object_2_value
            ]
        # If it's a dictionary, create a filtered dictionary with only the specified fields
        elif isinstance(object_2_value, dict):
            json_object_1[object_2_key] = {
                field: object_2_value.get(field, None) for field in fields if field in object_2_value
            }
        # For non-dictionary values (e.g., strings), copy the value directly
        else:
            json_object_1[object_2_key] = object_2_value

    return json_object_1