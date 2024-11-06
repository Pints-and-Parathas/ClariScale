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
        # If the value is a dictionary (like outlet_info), process each inner dictionary
        if isinstance(object_2_value, dict):
            # Create a new dictionary to hold merged fields for this key
            merged_fields = {}
            for inner_key, inner_value in object_2_value.items():
                # If inner_value is a dictionary, create a filtered dictionary with only the specified fields
                if isinstance(inner_value, dict):
                    merged_fields[inner_key] = {
                        field: inner_value.get(field, None) for field in fields if field in inner_value
                    }
                # For non-dictionary values, copy the value directly
                else:
                    merged_fields[inner_key] = inner_value
            # Add the merged fields under the parent key
            json_object_1[object_2_key] = merged_fields
        # Handle lists of dictionaries as before
        elif isinstance(object_2_value, list) and all(isinstance(item, dict) for item in object_2_value):
            json_object_1[object_2_key] = [
                {field: item[field] for field in fields if field in item} for item in object_2_value
            ]
        else:
            json_object_1[object_2_key] = object_2_value

    return json_object_1